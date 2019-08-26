// class SceneBegin extends eui.Component {
//   private btn_begin: eui.Button;
//   public constructor() {
//     super();
//     // this.skinName = "src/Game/SceneBeginSkin.exml";
//     this.skinName = "resource/eui_skins/SceneBeginSkin.exml";
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
var SceneBegin = (function (_super) {
    __extends(SceneBegin, _super);
    function SceneBegin() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/SceneBeginSkin.exml";
        _this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_begin, _this);
        _this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_setting, _this);
        //开始播放BGM~
        SoundMenager.Shared().PlayBGM();
        return _this;
    }
    SceneBegin.Shared = function () {
        if (SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    };
    SceneBegin.prototype.onclick_setting = function () {
        SoundMenager.Shared().PlayClick();
        this.addChild(GameSetting.Shared());
    };
    SceneBegin.prototype.onclick_begin = function () {
        SoundMenager.Shared().PlayClick();
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    };
    return SceneBegin;
}(eui.Component));
__reflect(SceneBegin.prototype, "SceneBegin");
//# sourceMappingURL=SceneBegin.js.map