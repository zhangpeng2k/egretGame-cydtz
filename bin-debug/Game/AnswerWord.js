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
//继承自“问题字”，“答案字”是放在上面回答区域，
//由于当答案字点击的时候，答案字会消失并将对应的问题字还原显示
var AnswerWord = (function (_super) {
    __extends(AnswerWord, _super);
    function AnswerWord() {
        var _this = _super.call(this) || this;
        _this.SelectWord = null;
        return _this;
    }
    AnswerWord.prototype.onclick_tap = function () {
        if (this.SelectWord != null) {
            this.SelectWord.visible = true;
            this.SelectWord = null;
            this.setWordText("");
        }
        console.log("AnswerWord");
    };
    //当一个问题字被选择添加到回答的时，设置不可见，并保存到本对象中以后使用
    //下面的问题字操作的时候，将其保存在回答字中，将来再操作时将其还原显示。
    AnswerWord.prototype.SetSelectWord = function (word) {
        if (word != null) {
            this.setWordText(word.getWordText());
            this.SelectWord = word;
            word.visible = false;
        }
        else {
            this.setWordText("");
            this.SelectWord = null;
        }
    };
    return AnswerWord;
}(Word));
__reflect(AnswerWord.prototype, "AnswerWord");
//# sourceMappingURL=AnswerWord.js.map