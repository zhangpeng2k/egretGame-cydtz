class SceneLevels extends eui.Component {
    private btn_back: eui.Button;
    private img_arrow: eui.Image;
    private group_levels: eui.Group;
    private sel_level: number = 0;
    private LevelIcons: LevelIcon[] = [];

    private static shared: SceneLevels;

    public static Shared() {
        if (SceneLevels.shared == null) {
            SceneLevels.shared = new SceneLevels();
        }
        return SceneLevels.shared;
    }
    public constructor() {
        super();

        this.skinName = "resource/eui_skins/SceneLevelsSkin.exml";
        console.log(this.btn_back);
        console.log(this.group_levels);

        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_back, this);


        //创建地图选项
        var row = 20;
        var col = 10;
        var spanx = 720 / col;      //计算行x间隔
        var spany = 1136 / row;     //计算列y间隔
        var group = new eui.Group();//地图背景
        group.width = 720;
        group.height = (spany * 400);//算出最大尺寸
        //填充背景
        for (var i = 0; i <= (group.height / 1138); i++) {
            var img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * 1138;
            img.touchEnabled = false;//关闭不必要的touch事件
            this.group_levels.addChildAt(img, 0);
        }
        //以正弦曲线绘制关卡图标的路径
        for (var i = 0; i < 400; i++) {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i / 2;
            icon.y = group.height - icon.y - spany;

            if (icon.Level <= LevelDataManager.Shared().Milestone) {
                icon.enabled = true;
            } else {
                icon.enabled = false;
            }
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_level, this);
            this.LevelIcons.push(icon);
            group.addChild(icon);
        }

        //开启位图缓存模式
        // group.cacheAsBitmap = true;
        //开启缓存之后。。。谷歌浏览器的WebGL会提示位图尺寸太大
        group.cacheAsBitmap = false;

        this.group_levels.addChild(group);
        //卷动到最底层
        this.group_levels.scrollV = group.height - 1100;

        //跟踪箭头
        this.img_arrow = new eui.Image();
        this.img_arrow.source = RES.getRes("PageDownBtn_png");
        this.img_arrow.anchorOffsetX = 124 / 2 - group.getChildAt(0).width / 2;
        this.img_arrow.anchorOffsetY = 76;
        this.img_arrow.touchEnabled = false;
        this.img_arrow.x = group.getChildAt(0).x;
        this.img_arrow.y = group.getChildAt(0).y;
        group.addChild(this.img_arrow);

    }

    private onclick_back() {
        SoundMenager.Shared().PlayClick();
        this.parent.addChild(SceneBegin.Shared());
        this.parent.removeChild(this);
    }
    private onclick_level(e: egret.TouchEvent) {
        SoundMenager.Shared().PlayClick();
        var icon = <LevelIcon>e.currentTarget;
        if (icon.enabled) {
            if (this.sel_level != icon.Level) {
                this.img_arrow.x = icon.x;
                this.img_arrow.y = icon.y;
                this.sel_level = icon.Level;
            } else {
                //进入并开始游戏
                console.log('进入并开始游戏');
                this.parent.addChild(SceneGame.Shared());
                SceneGame.Shared().InitLevel(icon.Level);
                this.parent.removeChild(this);
            }
        }

    }

    //打开指定的关卡，如果大于最远关卡，则保存数据也跟着调整
    public OpenLevel(level: number) {
        var icon = this.LevelIcons[level - 1];
        console.log("this.levelIcons:"+this.LevelIcons)
        icon.enabled = true;
        if (level >= LevelDataManager.Shared().Milestone) {
            LevelDataManager.Shared().Milestone = level;
            //同时将选定标记置于其上
            this.img_arrow.x = icon.x;
            this.img_arrow.y = icon.y;
            this.sel_level = icon.Level;
        }
    }


}