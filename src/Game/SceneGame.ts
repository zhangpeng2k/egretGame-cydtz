class SceneGame extends eui.Component {
	//单例
	private static shared: SceneGame;
	public static Shared() {
		if (SceneGame.shared == null) {
			SceneGame.shared = new SceneGame();
		}
		return SceneGame.shared;
	}
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/SceneGameSkin.exml";
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_back, this);
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_next,this);
	}
	//对象变量
	private group_answer: eui.Group;
	private group_words: eui.Group;
	private img_question: eui.Image;
	private btn_back: eui.Group;
	private levelIndex: number;

	private group_win:eui.Group;//胜利界面的group控件
	private btn_next:eui.Button;//下一个题目
	private lb_explain:eui.Label;//解释
	private lb_from:eui.Label;//来源
	

    private btn_setting: eui.Button;
	
	//初始化关卡
	public InitLevel(level: number) {
		this.levelIndex = level;
		var leveldata = LevelDataManager.Shared().GetLevel(level);
		this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_setting,this);
		//将字段接起来
		var words = leveldata.answer + leveldata.word;
		//随机一个其它题目的字段混合进本题目
		while (words.length == 10) {
			var i = Math.floor(Math.random() * 400);
			if (i != level) {
				var temp = LevelDataManager.Shared().GetLevel(i);
				words += temp.word + temp.answer;
			}
		}
		//对字段重排
		var wordlist: string[] = [];
		for (var i = 0; i < words.length; i++) {
			wordlist.push(words.charAt(i));
		}
		wordlist = this.randomlist(wordlist);
		//赋值
		for (var i = 0; i < this.group_words.numChildren; i++) {
			var wordrect = <Word>this.group_words.getChildAt(i);
			wordrect.setWordText(wordlist[i]);
			wordrect.visible = true;
		}
		//重置一些状态
		for (var i = 0; i < this.group_answer.numChildren; i++) {
			var answerrect = <AnswerWord>this.group_answer.getChildAt(i);
			answerrect.SetSelectWord(null);
			answerrect.visible = true;
			answerrect.SelectWord = null;
		}
		//显示图像
		this.img_question.source = "resource/assets/" + leveldata.img;
	}
	

	//下一个题目
	private onclick_next(){
		SoundMenager.Shared().PlayClick();
		this.group_win.visible = false;
		SceneLevels.Shared().OpenLevel(this.levelIndex + 1);
		this.InitLevel(this.levelIndex + 1);
	}
	private showWin(){
		SoundMenager.Shared().PlayRight();
		this.group_win.visible = true;
		var leveldata = LevelDataManager.Shared().GetLevel(this.levelIndex);
		this.lb_from.text = leveldata.tip;
		this.lb_explain.text = leveldata.content;
	}
	//将一个数列随机
	private randomlist(arr: any[]): any[] {
		var array = [];
		while (arr.length > 0) {
			var i = Math.floor(Math.random() * arr.length);
			array.push(arr[i]);
			arr.splice(i, 1);
		}
		return array;
	}
	private onclick_setting() {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    }

	//当字点击的时候，由word类抛出
	public onclick_word(word: Word) {
		SoundMenager.Shared().PlayWord();
		//找到一个合适的位置添加进答案内容
		var sel: AnswerWord = null;
		for (var i = 0; i < this.group_answer.numChildren; i++) {
			var answer = <AnswerWord>this.group_answer.getChildAt(i);
			if (answer.SelectWord == null) {
				sel = answer;
				break;
			}
		}
		//当有一个合适的位置的时候就会将字填充，并判断是否胜利
		if (sel != null) {
			sel.SetSelectWord(word);
			//判断是否胜利
			var check_str: string = "";
			for (var i = 0; i < this.group_answer.numChildren; i++) {
				var answer = <AnswerWord>this.group_answer.getChildAt(i);
				check_str += answer.getWordText();
			}
			if (check_str == LevelDataManager.Shared().GetLevel(this.levelIndex).answer) {
				//胜利
				console.log("win");
				this.showWin();
			}else if(check_str.length == LevelDataManager.Shared().GetLevel(this.levelIndex).answer.length){
				console.log(check_str);
				SoundMenager.Shared().PlayWrong();
			}
		}
	}

	private onclick_back() {
		//点击音效
        SoundMenager.Shared().PlayClick();
		this.parent.addChild(SceneLevels.Shared());
		this.parent.removeChild(this);
	}
}