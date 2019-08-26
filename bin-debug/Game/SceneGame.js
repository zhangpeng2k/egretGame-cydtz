var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneGame = (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/SceneGameSkin.exml";
        _this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_back, _this);
        _this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_next, _this);
        return _this;
    }
    SceneGame.Shared = function () {
        if (SceneGame.shared == null) {
            SceneGame.shared = new SceneGame();
        }
        return SceneGame.shared;
    };
    //初始化关卡
    SceneGame.prototype.InitLevel = function (level) {
        this.levelIndex = level;
        var leveldata = LevelDataManager.Shared().GetLevel(level);
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_setting, this);
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
        var wordlist = [];
        for (var i = 0; i < words.length; i++) {
            wordlist.push(words.charAt(i));
        }
        wordlist = this.randomlist(wordlist);
        //赋值
        for (var i = 0; i < this.group_words.numChildren; i++) {
            var wordrect = this.group_words.getChildAt(i);
            wordrect.setWordText(wordlist[i]);
            wordrect.visible = true;
        }
        //重置一些状态
        for (var i = 0; i < this.group_answer.numChildren; i++) {
            var answerrect = this.group_answer.getChildAt(i);
            answerrect.SetSelectWord(null);
            answerrect.visible = true;
            answerrect.SelectWord = null;
        }
        //显示图像
        this.img_question.source = "resource/assets/" + leveldata.img;
    };
    //下一个题目
    SceneGame.prototype.onclick_next = function () {
        SoundMenager.Shared().PlayClick();
        this.group_win.visible = false;
        SceneLevels.Shared().OpenLevel(this.levelIndex + 1);
        this.InitLevel(this.levelIndex + 1);
    };
    SceneGame.prototype.showWin = function () {
        SoundMenager.Shared().PlayRight();
        this.group_win.visible = true;
        var leveldata = LevelDataManager.Shared().GetLevel(this.levelIndex);
        this.lb_from.text = leveldata.tip;
        this.lb_explain.text = leveldata.content;
    };
    //将一个数列随机
    SceneGame.prototype.randomlist = function (arr) {
        var array = [];
        while (arr.length > 0) {
            var i = Math.floor(Math.random() * arr.length);
            array.push(arr[i]);
            arr.splice(i, 1);
        }
        return array;
    };
    SceneGame.prototype.onclick_setting = function () {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    };
    //当字点击的时候，由word类抛出
    SceneGame.prototype.onclick_word = function (word) {
        SoundMenager.Shared().PlayWord();
        //找到一个合适的位置添加进答案内容
        var sel = null;
        for (var i = 0; i < this.group_answer.numChildren; i++) {
            var answer = this.group_answer.getChildAt(i);
            if (answer.SelectWord == null) {
                sel = answer;
                break;
            }
        }
        //当有一个合适的位置的时候就会将字填充，并判断是否胜利
        if (sel != null) {
            sel.SetSelectWord(word);
            //判断是否胜利
            var check_str = "";
            for (var i = 0; i < this.group_answer.numChildren; i++) {
                var answer = this.group_answer.getChildAt(i);
                check_str += answer.getWordText();
            }
            if (check_str == LevelDataManager.Shared().GetLevel(this.levelIndex).answer) {
                //胜利
                console.log("win");
                this.showWin();
            }
            else if (check_str.length == LevelDataManager.Shared().GetLevel(this.levelIndex).answer.length) {
                console.log(check_str);
                SoundMenager.Shared().PlayWrong();
            }
        }
    };
    SceneGame.prototype.onclick_back = function () {
        //点击音效
        SoundMenager.Shared().PlayClick();
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    };
    return SceneGame;
}(eui.Component));
__reflect(SceneGame.prototype, "SceneGame");
//# sourceMappingURL=SceneGame.js.map