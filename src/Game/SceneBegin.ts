// class SceneBegin extends eui.Component {
//   private btn_begin: eui.Button;
//   public constructor() {
//     super();
//     // this.skinName = "src/Game/SceneBeginSkin.exml";
//     this.skinName = "resource/eui_skins/SceneBeginSkin.exml";
    
//     this.addEventListener(eui.UIEvent.COMPLETE, this.on_begin, this);

//     console.log(this.btn_begin);
//   }
//   private on_begin(event: egret.TouchEvent): void {
//     console.log('OK')
//     this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
//   }

//   private onclick_begin(event: egret.TouchEvent): void {
//     console.log('我是点击事件')
//   }



// }
class SceneBegin extends eui.Component {
    //单例
    private static shared: SceneBegin;
    private btn_setting: eui.Button;
    public static Shared() {
        if(SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    }
    private btn_begin:eui.Button;
    public constructor() {
          super();
          this.skinName = "resource/eui_skins/SceneBeginSkin.exml";
          this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_begin,this);
        
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_setting,this);
          //开始播放BGM~
          SoundMenager.Shared().PlayBGM();
    }


    private onclick_setting() {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    }

    private onclick_begin(){
        SoundMenager.Shared().PlayClick();
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }
}