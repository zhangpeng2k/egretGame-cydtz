window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","LevelIconSkin":"resource/eui_skins/LevelIconSkin.exml","WordSkin":"resource/eui_skins/WordSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSettingSkin.exml'] = window.GameSettingSkin = (function (_super) {
	__extends(GameSettingSkin, _super);
	var GameSettingSkin$Skin1 = 	(function (_super) {
		__extends(GameSettingSkin$Skin1, _super);
		function GameSettingSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","YesBtn1_jpg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "YesBtn_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin1;
	})(eui.Skin);

	var GameSettingSkin$Skin2 = 	(function (_super) {
		__extends(GameSettingSkin$Skin2, _super);
		function GameSettingSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_music_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_music_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin2;
	})(eui.Skin);

	var GameSettingSkin$Skin3 = 	(function (_super) {
		__extends(GameSettingSkin$Skin3, _super);
		function GameSettingSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sound_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sound_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin3;
	})(eui.Skin);

	function GameSettingSkin() {
		_super.call(this);
		this.skinParts = ["btn_agree","btn_music","img_music_disable","btn_sound","img_sound_disable"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btn_agree_i(),this._Group1_i(),this._Group2_i(),this._Label1_i()];
	}
	var _proto = GameSettingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 255;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,8,196,51);
		t.source = "MoneyBG_png";
		t.verticalCenter = 0.5;
		t.width = 400;
		return t;
	};
	_proto.btn_agree_i = function () {
		var t = new eui.Button();
		this.btn_agree = t;
		t.horizontalCenter = 0.5;
		t.y = 623;
		t.skinName = GameSettingSkin$Skin1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 94;
		t.width = 102;
		t.x = 238;
		t.y = 512;
		t.elementsContent = [this.btn_music_i(),this.img_music_disable_i()];
		return t;
	};
	_proto.btn_music_i = function () {
		var t = new eui.Button();
		this.btn_music = t;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin2;
		return t;
	};
	_proto.img_music_disable_i = function () {
		var t = new eui.Image();
		this.img_music_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 94;
		t.width = 102;
		t.x = 403;
		t.y = 512;
		t.elementsContent = [this.btn_sound_i(),this.img_sound_disable_i()];
		return t;
	};
	_proto.btn_sound_i = function () {
		var t = new eui.Button();
		this.btn_sound = t;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin3;
		return t;
	};
	_proto.img_sound_disable_i = function () {
		var t = new eui.Image();
		this.img_sound_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "设置";
		t.y = 466;
		return t;
	};
	return GameSettingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelIconSkin.exml'] = window.LevelIconSkin = (function (_super) {
	__extends(LevelIconSkin, _super);
	function LevelIconSkin() {
		_super.call(this);
		this.skinParts = ["lb_level"];
		
		this.height = 77;
		this.width = 77;
		this.elementsContent = [this.lb_level_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"lb_level")
				])
		];
	}
	var _proto = LevelIconSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "gs_select_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.alpha = 1;
		t.horizontalCenter = 0;
		t.source = "gs_select_dis_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb_level_i = function () {
		var t = new eui.Label();
		this.lb_level = t;
		t.horizontalCenter = 0;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	return LevelIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SceneBeginSkin.exml'] = window.SceneBeginSkin = (function (_super) {
	__extends(SceneBeginSkin, _super);
	var SceneBeginSkin$Skin4 = 	(function (_super) {
		__extends(SceneBeginSkin$Skin4, _super);
		function SceneBeginSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","StartBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneBeginSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "StartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneBeginSkin$Skin4;
	})(eui.Skin);

	var SceneBeginSkin$Skin5 = 	(function (_super) {
		__extends(SceneBeginSkin$Skin5, _super);
		function SceneBeginSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","MoneyBG_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneBeginSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "MoneyBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneBeginSkin$Skin5;
	})(eui.Skin);

	function SceneBeginSkin() {
		_super.call(this);
		this.skinParts = ["btn_begin","btn_setting"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.btn_begin_i(),this.btn_setting_i()];
	}
	var _proto = SceneBeginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "GameBG1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_begin_i = function () {
		var t = new eui.Button();
		this.btn_begin = t;
		t.enabled = true;
		t.label = "";
		t.x = 182.5;
		t.y = 1009;
		t.skinName = SceneBeginSkin$Skin4;
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.anchorOffsetX = 0;
		t.label = "设置";
		t.width = 188;
		t.x = 514;
		t.y = 22.5;
		t.skinName = SceneBeginSkin$Skin5;
		return t;
	};
	return SceneBeginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WordSkin.exml'] = window.WordSkin = (function (_super) {
	__extends(WordSkin, _super);
	function WordSkin() {
		_super.call(this);
		this.skinParts = ["lb_text"];
		
		this.height = 80;
		this.minHeight = 80;
		this.minWidth = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.lb_text_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x0276D0;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "字";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return WordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SceneGameSkin.exml'] = window.SceneGameSkin = (function (_super) {
	__extends(SceneGameSkin, _super);
	var SceneGameSkin$Skin6 = 	(function (_super) {
		__extends(SceneGameSkin$Skin6, _super);
		function SceneGameSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","MoneyBG_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "MoneyBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin6;
	})(eui.Skin);

	var SceneGameSkin$Skin7 = 	(function (_super) {
		__extends(SceneGameSkin$Skin7, _super);
		function SceneGameSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin7;
	})(eui.Skin);

	var SceneGameSkin$Skin8 = 	(function (_super) {
		__extends(SceneGameSkin$Skin8, _super);
		function SceneGameSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ResultBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ResultBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin8;
	})(eui.Skin);

	function SceneGameSkin() {
		_super.call(this);
		this.skinParts = ["btn_setting","group_words","btn_back","img_question","group_answer","btn_next","lb_from","lb_explain","group_win"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_setting_i(),this.group_words_i(),this.btn_back_i(),this.img_question_i(),this.group_answer_i(),this.group_win_i()];
	}
	var _proto = SceneGameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "GameBG3_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "WordFrame_png";
		t.x = 39;
		t.y = 120;
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.label = "设置";
		t.width = 188;
		t.x = 518;
		t.y = 11;
		t.skinName = SceneGameSkin$Skin6;
		return t;
	};
	_proto.group_words_i = function () {
		var t = new eui.Group();
		this.group_words = t;
		t.height = 417;
		t.width = 538;
		t.x = 108;
		t.y = 637;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Word1_i(),this._Word2_i(),this._Word3_i(),this._Word4_i(),this._Word5_i(),this._Word6_i(),this._Word7_i(),this._Word8_i(),this._Word9_i(),this._Word10_i(),this._Word11_i(),this._Word12_i(),this._Word13_i(),this._Word14_i(),this._Word15_i(),this._Word16_i(),this._Word17_i(),this._Word18_i(),this._Word19_i(),this._Word20_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 30;
		t.verticalGap = 30;
		return t;
	};
	_proto._Word1_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 80;
		t.y = 106;
		return t;
	};
	_proto._Word2_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 90;
		t.y = 116;
		return t;
	};
	_proto._Word3_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 100;
		t.y = 126;
		return t;
	};
	_proto._Word4_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 110;
		t.y = 136;
		return t;
	};
	_proto._Word5_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 120;
		t.y = 146;
		return t;
	};
	_proto._Word6_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 130;
		t.y = 156;
		return t;
	};
	_proto._Word7_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 140;
		t.y = 166;
		return t;
	};
	_proto._Word8_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 150;
		t.y = 176;
		return t;
	};
	_proto._Word9_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 160;
		t.y = 186;
		return t;
	};
	_proto._Word10_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 170;
		t.y = 196;
		return t;
	};
	_proto._Word11_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 180;
		t.y = 206;
		return t;
	};
	_proto._Word12_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 190;
		t.y = 216;
		return t;
	};
	_proto._Word13_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 200;
		t.y = 226;
		return t;
	};
	_proto._Word14_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 210;
		t.y = 236;
		return t;
	};
	_proto._Word15_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 220;
		t.y = 246;
		return t;
	};
	_proto._Word16_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 230;
		t.y = 256;
		return t;
	};
	_proto._Word17_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 240;
		t.y = 266;
		return t;
	};
	_proto._Word18_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 250;
		t.y = 276;
		return t;
	};
	_proto._Word19_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 260;
		t.y = 286;
		return t;
	};
	_proto._Word20_i = function () {
		var t = new Word();
		t.skinName = "WordSkin";
		t.x = 270;
		t.y = 296;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.x = 11;
		t.y = 8;
		t.skinName = SceneGameSkin$Skin7;
		return t;
	};
	_proto.img_question_i = function () {
		var t = new eui.Image();
		this.img_question = t;
		t.height = 260;
		t.horizontalCenter = 0;
		t.width = 390;
		t.y = 179;
		return t;
	};
	_proto.group_answer_i = function () {
		var t = new eui.Group();
		this.group_answer = t;
		t.height = 95;
		t.width = 373;
		t.x = 177;
		t.y = 464;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i(),this._AnswerWord3_i(),this._AnswerWord4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.skinName = "WordSkin";
		t.x = 185;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.skinName = "WordSkin";
		t.x = 284;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord3_i = function () {
		var t = new AnswerWord();
		t.skinName = "WordSkin";
		t.x = 378;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord4_i = function () {
		var t = new AnswerWord();
		t.skinName = "WordSkin";
		t.x = 475;
		t.y = 478;
		return t;
	};
	_proto.group_win_i = function () {
		var t = new eui.Group();
		this.group_win = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this.btn_next_i(),this.lb_from_i(),this.lb_explain_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.53;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "Result_png";
		t.verticalCenter = 260;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.x = 432;
		t.y = 941;
		t.skinName = SceneGameSkin$Skin8;
		return t;
	};
	_proto.lb_from_i = function () {
		var t = new eui.Label();
		this.lb_from = t;
		t.height = 65;
		t.multiline = true;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 501;
		t.x = 113;
		t.y = 700;
		return t;
	};
	_proto.lb_explain_i = function () {
		var t = new eui.Label();
		this.lb_explain = t;
		t.height = 127;
		t.multiline = true;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 501;
		t.x = 113;
		t.y = 805;
		return t;
	};
	return SceneGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SceneLevelsSkin.exml'] = window.SceneLevelsSkin = (function (_super) {
	__extends(SceneLevelsSkin, _super);
	var SceneLevelsSkin$Skin9 = 	(function (_super) {
		__extends(SceneLevelsSkin$Skin9, _super);
		function SceneLevelsSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","MoneyBG_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneLevelsSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "MoneyBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneLevelsSkin$Skin9;
	})(eui.Skin);

	var SceneLevelsSkin$Skin10 = 	(function (_super) {
		__extends(SceneLevelsSkin$Skin10, _super);
		function SceneLevelsSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneLevelsSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneLevelsSkin$Skin10;
	})(eui.Skin);

	function SceneLevelsSkin() {
		_super.call(this);
		this.skinParts = ["btn_setting","group_levels","btn_back"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Scroller1_i(),this.btn_back_i()];
	}
	var _proto = SceneLevelsSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this.group_levels_i();
		return t;
	};
	_proto.group_levels_i = function () {
		var t = new eui.Group();
		this.group_levels = t;
		t.elementsContent = [this.btn_setting_i()];
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.label = "设置";
		t.width = 188;
		t.x = 507;
		t.y = 12;
		t.skinName = SceneLevelsSkin$Skin9;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.x = 607;
		t.y = 1047;
		t.skinName = SceneLevelsSkin$Skin10;
		return t;
	};
	return SceneLevelsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);