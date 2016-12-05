const DOMProps = {
  "abbr": "abbr",
  "accept": "accept",
  "acceptCharset": "accept-charset",
  "accessKey": "accesskey",
  "action": "action",
  "allowFullScreen": "allowfullscreen",
  "allowTransparency": "allowtransparency",
  "alt": "alt",
  "async": "async",
  "autoComplete": "autocomplete",
  "autoFocus": "autofocus",
  "autoPlay": "autoplay",
  "cellPadding": "cellpadding",
  "cellSpacing": "cellspacing",
  "challenge": "challenge",
  "charset": "charset",
  "checked": "checked",
  "cite": "cite",
  "class": "class",
  "className": "class",
  "cols": "cols",
  "colSpan": "colspan",
  "command": "command",
  "content": "content",
  "contentEditable": "contenteditable",
  "contextMenu": "contextmenu",
  "controls": "controls",
  "coords": "coords",
  "crossOrigin": "crossorigin",
  "data": "data",
  "dateTime": "datetime",
  "default": "default",
  "defer": "defer",
  "dir": "dir",
  "disabled": "disabled",
  "download": "download",
  "draggable": "draggable",
  "dropzone": "dropzone",
  "encType": "enctype",
  "for": "for",
  "form": "form",
  "formAction": "formaction",
  "formEncType": "formenctype",
  "formMethod": "formmethod",
  "formNoValidate": "formnovalidate",
  "formTarget": "formtarget",
  "frameBorder": "frameBorder",
  "headers": "headers",
  "height": "height",
  "hidden": "hidden",
  "high": "high",
  "href": "href",
  "hrefLang": "hreflang",
  "htmlFor": "for",
  "httpEquiv": "http-equiv",
  "icon": "icon",
  "id": "id",
  "inputMode": "inputmode",
  "isMap": "ismap",
  "itemId": "itemid",
  "itemProp": "itemprop",
  "itemRef": "itemref",
  "itemScope": "itemscope",
  "itemType": "itemtype",
  "kind": "kind",
  "label": "label",
  "lang": "lang",
  "list": "list",
  "loop": "loop",
  "manifest": "manifest",
  "max": "max",
  "maxLength": "maxlength",
  "media": "media",
  "mediaGroup": "mediagroup",
  "method": "method",
  "min": "min",
  "minLength": "minlength",
  "multiple": "multiple",
  "muted": "muted",
  "name": "name",
  "noValidate": "novalidate",
  "open": "open",
  "optimum": "optimum",
  "pattern": "pattern",
  "ping": "ping",
  "placeholder": "placeholder",
  "poster": "poster",
  "preload": "preload",
  "radioGroup": "radiogroup",
  "readOnly": "readonly",
  "rel": "rel",
  "required": "required",
  "role": "role",
  "rows": "rows",
  "rowSpan": "rowspan",
  "sandbox": "sandbox",
  "scope": "scope",
  "scoped": "scoped",
  "scrolling": "scrolling",
  "seamless": "seamless",
  "selected": "selected",
  "shape": "shape",
  "size": "size",
  "sizes": "sizes",
  "sortable": "sortable",
  "span": "span",
  "spellCheck": "spellcheck",
  "src": "src",
  "srcDoc": "srcdoc",
  "srcSet": "srcset",
  "start": "start",
  "step": "step",
  "style": "style",
  "tabIndex": "tabindex",
  "target": "target",
  "title": "title",
  "translate": "translate",
  "type": "type",
  "typeMustMatch": "typemustmatch",
  "useMap": "usemap",
  "value": "value",
  "width": "width",
  "wmode": "wmode",
  "wrap": "wrap",
  "onCopy": "onCopy",
  "onCut": "onCut",
  "onPaste": "onPaste",
  "onLoad": "onLoad",
  "onError": "onError",
  "onWheel": "onWheel",
  "onScroll": "onScroll",
  "onCompositionEnd": "onCompositionEnd",
  "onCompositionStart": "onCompositionStart",
  "onCompositionUpdate": "onCompositionUpdate",
  "onKeyDown": "onKeyDown",
  "onKeyPress": "onKeyPress",
  "onKeyUp": "onKeyUp",
  "onFocus": "onFocus",
  "onBlur": "onBlur",
  "onChange":  "onChange",
  "onInput": "onInput",
  "onSubmit": "onSubmit",
  "onClick": "onClick",
  "onContextMenu": "onContextMenu",
  "onDoubleClick": "onDoubleClick",
  "onDrag": "onDrag",
  "onDragEnd": "onDragEnd",
  "onDragEnter": "onDragEnter",
  "onDragExit": "onDragExit",
  "onDragLeave": "onDragLeave",
  "onDragOver": "onDragOver",
  "onDragStart": "onDragStart",
  "onDrop": "onDrop",
  "onMouseDown": "onMouseDown",
  "onMouseEnter": "onMouseEnter",
  "onMouseLeave": "onMouseLeave",
  "onMouseMove": "onMouseMove",
  "onMouseOut": "onMouseOut",
  "onMouseOver": "onMouseOver",
  "onMouseUp": "onMouseUp",
  "onSelect": "onSelect",
  "onTouchCancel": "onTouchCancel",
  "onTouchEnd": "onTouchEnd",
  "onTouchMove": "onTouchMove",
  "onTouchStart": "onTouchStart",
  "onAnimationStart": "onAnimationStart",
  "onAnimationEnd": "onAnimationEnd",
  "onAnimationIteration": "onAnimationIteration",
  "onTransitionEnd": "onTransitionEnd"
};

export default function filterReactDomProps(props) {
  const filterProps = {};

  for (const prop in props) {
    if (props.hasOwnProperty(prop) && DOMProps[prop]) {
      filterProps[prop] = props[prop];
    }
  }
  return filterProps;
}
