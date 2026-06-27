import { createRequire } from "node:module";
import { renderToStaticMarkup } from "react-dom/server";
import t, { createContext, createElement } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache = Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = fn(arg);
		return cache[arg];
	};
}
//#endregion
//#region node_modules/.pnpm/@emotion+is-prop-valid@1.4.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* #__PURE__ */ memoize(function(prop) {
	return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @param {number} position
* @return {number}
*/
function indexof(value, search, position) {
	return value.indexOf(search, position);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
/**
* @param {string[]} array
* @param {RegExp} pattern
* @return {string[]}
*/
function filter(array, pattern) {
	return array.filter(function(value) {
		return !match(value, pattern);
	});
}
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {object[]} siblings
* @param {number} length
*/
function node(value, root, parent, type, props, children, length, siblings) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: "",
		siblings
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
/**
* @param {object} root
*/
function lift(root) {
	while (root.root) root = copy(root.root, { children: [root] });
	append(root, root.siblings);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
					if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== " ") characters += " ";
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && (strlen(characters) - length || variable === 0 && previous === 47)) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1, declarations) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2, declarations), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else {
						switch (atrule) {
							case 99: if (charat(characters, 3) === 110) break;
							case 108: if (charat(characters, 2) === 97) break;
							default: offset = 0;
							case 100:
							case 109:
							case 115:
						}
						if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
						else parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @param {object[]} siblings
* @return {object}
*/
function comment(value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function declaration(value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Prefixer.js
/**
* @param {string} value
* @param {number} length
* @param {object[]} children
* @return {string}
*/
function prefix(value, length, children) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599: return WEBKIT + value + value;
		case 4855: return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
		case 4789: return MOZ + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 5936: switch (charat(value, length + 11)) {
			case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
			case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
			case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
		}
		case 6828:
		case 4268:
		case 2903: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length) + value;
			break;
		case 2592:
		case 3360: return MS + replace(value, "template-", "") + value;
		case 4384:
		case 3616:
			if (children && children.some(function(element, index) {
				return length = index, match(element.props, /grid-\w+-end/);
			})) return ~indexof(value + (children = children[length].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
			return MS + replace(value, "-start", "") + value;
		case 4896:
		case 4128: return children && children.some(function(element) {
			return match(element.props, /grid-\w+-start/);
		}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length, children) + value : value;
			}
			break;
		case 5152:
		case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
			return MS + a + ":" + b + f + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
		});
		case 4949:
			if (charat(value, length + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
			break;
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				case 100: return replace(value, ":", ":" + MS) + value;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
	}
	return value;
}
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region node_modules/.pnpm/stylis@4.3.6/node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
*/
function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element.return) switch (element.type) {
			case DECLARATION:
				element.return = prefix(element.value, element.length, children);
				return;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(children = element.props, function(value) {
				switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write":
						lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
					case "::placeholder":
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter(children, callback) });
						break;
				}
				return "";
			});
		}
	}
}
//#endregion
//#region node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js
var r, i;
var l = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", c = "active", a = "data-styled-version", u = "6.4.3", d = "/*!sc*/\n", h = "undefined" != typeof window && "undefined" != typeof document, p = void 0 === t.createContext;
function f(e) {
	if ("undefined" != typeof process && void 0 !== process.env) {
		const t = process.env[e];
		if (void 0 !== t && "" !== t) return "false" !== t;
	}
}
var m = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = f("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : f("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && "production" !== process.env.NODE_ENV), g = "sc-keyframes-", y = {}, v = "production" !== process.env.NODE_ENV ? {
	1: "Cannot create styled-component for component: %s.\n\n",
	2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
	3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
	4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
	5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
	6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
	7: "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
	8: "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
	9: "Missing document `<head>`\n\n",
	10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
	11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
	12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n",
	13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
	14: "ThemeProvider: \"theme\" prop is required.\n\n",
	15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
	16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
	17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n",
	18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n"
} : {};
function S(e, ...t) {
	return "production" === process.env.NODE_ENV ? /* @__PURE__ */ new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length > 0 ? ` Args: ${t.join(", ")}` : ""}`) : new Error(function(...e) {
		let t = e[0];
		const n = [];
		for (let t = 1, o = e.length; t < o; t += 1) n.push(e[t]);
		return n.forEach((e) => {
			t = t.replace(/%[a-z]/, e);
		}), t;
	}(v[e], ...t).trim());
}
var b = 1 << 30;
var w = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = 1;
var P = (e) => {
	if (w.has(e)) return w.get(e);
	for (; N.has(C);) C++;
	const t = C++;
	if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > b)) throw S(16, `${t}`);
	return w.set(e, t), N.set(t, e), t;
}, O = (e) => N.get(e), E = (e, t) => {
	C = t + 1, w.set(e, t), N.set(t, e);
}, I = /invalid hook call/i, A = /* @__PURE__ */ new Set(), _ = (e, n) => {
	if ("production" !== process.env.NODE_ENV) {
		if (p) return;
		const o = `The component ${e}${n ? ` with the id of "${n}"` : ""} has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n`, s = console.error;
		try {
			let e = !0;
			console.error = (t, ...n) => {
				I.test(t) ? (e = !1, A.delete(o)) : s(t, ...n);
			}, "function" == typeof t.useState && t.useState(null), e && !A.has(o) && (console.warn(o), A.add(o));
		} catch (e) {
			I.test(e.message) && A.delete(o);
		} finally {
			console.error = s;
		}
	}
}, x = Object.freeze([]), $ = Object.freeze({});
function R(e, t, n = $) {
	return e.theme !== n.theme && e.theme || t || n.theme;
}
var j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k = /(^-|-$)/g;
function T(e) {
	return e.replace(j, "-").replace(k, "");
}
var D = /(a)(d)/gi, M = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
	let t, n = "";
	for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = M(t % 52) + n;
	return (M(t % 52) + n).replace(D, "$1-$2");
}
var G = 5381, F = (e, t) => {
	let n = t.length;
	for (; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
}, z = (e) => F(G, e);
function W(e) {
	return V(z(e) >>> 0);
}
function B(e) {
	return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
	return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
function q(e) {
	return L(e) ? `styled.${e}` : `Styled(${B(e)})`;
}
var H = Symbol.for("react.memo"), Y = Symbol.for("react.forward_ref"), U = {
	contextType: !0,
	defaultProps: !0,
	displayName: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	propTypes: !0,
	type: !0
}, J = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
}, X = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
}, Z = {
	[Y]: {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	[H]: X
};
function K(e) {
	return ("type" in (t = e) && t.type.$$typeof) === H ? X : "$$typeof" in e ? Z[e.$$typeof] : U;
	var t;
}
var Q = Object.defineProperty, ee = Object.getOwnPropertyNames, te = Object.getOwnPropertySymbols, ne = Object.getOwnPropertyDescriptor, oe = Object.getPrototypeOf, se = Object.prototype;
function re(e, t, n) {
	if ("string" != typeof t) {
		const o = oe(t);
		o && o !== se && re(e, o, n);
		const s = ee(t).concat(te(t)), r = K(e), i = K(t);
		for (let o = 0; o < s.length; ++o) {
			const l = s[o];
			if (!(l in J || n && n[l] || i && l in i || r && l in r)) {
				const n = ne(t, l);
				try {
					Q(e, l, n);
				} catch (e) {}
			}
		}
	}
	return e;
}
function ie(e) {
	return "function" == typeof e;
}
var le = Symbol.for("react.forward_ref");
function ce(e) {
	return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === le && "styledComponentId" in e;
}
function ae(e, t) {
	return e && t ? e + " " + t : e || t || "";
}
function ue(e, t) {
	return e.join(t || "");
}
function de(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += e[n] + d;
	return t;
}
function he(e) {
	return e ? e.replaceAll(d, "") : e;
}
function pe(e) {
	return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fe(e, t, n = !1) {
	if (!n && !pe(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e[n] = fe(e[n], t[n]);
	else if (pe(t)) for (const n in t) e[n] = fe(e[n], t[n]);
	return e;
}
function me(e) {
	if (!p) return null;
	const n = t.cache;
	return n ? n(e) : null;
}
function ge(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var ye = class {
	constructor(e) {
		this.groupSizes = /* @__PURE__ */ new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
	}
	indexOfGroup(e) {
		if (e === this._cGroup) return this._cIndex;
		let t = this._cIndex;
		if (e > this._cGroup) for (let n = this._cGroup; n < e; n++) t += this.groupSizes[n];
		else for (let n = this._cGroup - 1; n >= e; n--) t -= this.groupSizes[n];
		return this._cGroup = e, this._cIndex = t, t;
	}
	insertRules(e, t) {
		if (e >= this.groupSizes.length) {
			const t = this.groupSizes, n = t.length;
			let o = n;
			for (; e >= o;) if (o <<= 1, o < 0) throw S(16, `${e}`);
			this.groupSizes = new Uint32Array(o), this.groupSizes.set(t), this.length = o;
			for (let e = n; e < o; e++) this.groupSizes[e] = 0;
		}
		let n = this.indexOfGroup(e + 1), o = 0;
		for (let s = 0, r = t.length; s < r; s++) this.tag.insertRule(n, t[s]) && (this.groupSizes[e]++, n++, o++);
		o > 0 && this._cGroup > e && (this._cIndex += o);
	}
	clearGroup(e) {
		if (e < this.length) {
			const t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
			this.groupSizes[e] = 0;
			for (let e = n; e < o; e++) this.tag.deleteRule(n);
			t > 0 && this._cGroup > e && (this._cIndex -= t);
		}
	}
	getGroup(e) {
		let t = "";
		if (e >= this.length || 0 === this.groupSizes[e]) return t;
		const n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n;
		for (let e = o; e < s; e++) t += this.tag.getRule(e) + d;
		return t;
	}
}, ve = `style[${l}][${a}="${u}"]`, Se = new RegExp(`^${l}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), be = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType, we = (e) => {
	if (!e) return document;
	if (be(e)) return e;
	if ("getRootNode" in e) {
		const t = e.getRootNode();
		if (be(t)) return t;
	}
	return document;
}, Ne = (e, t, n) => {
	const o = n.split(",");
	let s;
	for (let n = 0, r = o.length; n < r; n++) (s = o[n]) && e.registerName(t, s);
}, Ce = (e, t) => {
	var n;
	const o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(d), s = [];
	for (let t = 0, n = o.length; t < n; t++) {
		const n = o[t].trim();
		if (!n) continue;
		const r = n.match(Se);
		if (r) {
			const t = 0 | parseInt(r[1], 10), n = r[2];
			0 !== t && (E(n, t), Ne(e, n, r[3]), e.getTag().insertRules(t, s)), s.length = 0;
		} else s.push(n);
	}
}, Pe = (e) => {
	const t = we(e.options.target).querySelectorAll(ve);
	for (let n = 0, o = t.length; n < o; n++) {
		const o = t[n];
		o && o.getAttribute(l) !== c && (Ce(e, o), o.parentNode && o.parentNode.removeChild(o));
	}
};
var Oe = !1;
function Ee() {
	if (!1 !== Oe) return Oe;
	if ("undefined" != typeof document) {
		const e = document.head.querySelector("meta[property=\"csp-nonce\"]");
		if (e) return Oe = e.nonce || e.getAttribute("content") || void 0;
		const t = document.head.querySelector("meta[name=\"sc-nonce\"]");
		if (t) return Oe = t.getAttribute("content") || void 0;
	}
	return Oe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ie = (e, t) => {
	const n = document.head, o = e || n, s = document.createElement("style"), r = ((e) => {
		const t = Array.from(e.querySelectorAll(`style[${l}]`));
		return t[t.length - 1];
	})(o), i = void 0 !== r ? r.nextSibling : null;
	s.setAttribute(l, c), s.setAttribute(a, u);
	const d = t || Ee();
	return d && s.setAttribute("nonce", d), o.insertBefore(s, i), s;
}, Ae = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.element.appendChild(document.createTextNode("")), this.sheet = ((e) => {
			var t;
			if (e.sheet) return e.sheet;
			const n = null !== (t = e.getRootNode().styleSheets) && void 0 !== t ? t : document.styleSheets;
			for (let t = 0, o = n.length; t < o; t++) {
				const o = n[t];
				if (o.ownerNode === e) return o;
			}
			throw S(17);
		})(this.element), this.length = 0;
	}
	insertRule(e, t) {
		try {
			return this.sheet.insertRule(t, e), this.length++, !0;
		} catch (e) {
			return !1;
		}
	}
	deleteRule(e) {
		this.sheet.deleteRule(e), this.length--;
	}
	getRule(e) {
		const t = this.sheet.cssRules[e];
		return t && t.cssText ? t.cssText : "";
	}
}, _e = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.nodes = this.element.childNodes, this.length = 0;
	}
	insertRule(e, t) {
		if (e <= this.length && e >= 0) {
			const n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
		}
		return !1;
	}
	deleteRule(e) {
		this.element.removeChild(this.nodes[e]), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.nodes[e].textContent : "";
	}
}, xe = class {
	constructor(e) {
		this.rules = [], this.length = 0;
	}
	insertRule(e, t) {
		return e <= this.length && (e === this.length ? this.rules.push(t) : this.rules.splice(e, 0, t), this.length++, !0);
	}
	deleteRule(e) {
		this.rules.splice(e, 1), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.rules[e] : "";
	}
};
var $e = h;
var Re = {
	isServer: !h,
	useCSSOMInjection: !m
};
var je = class je {
	static registerId(e) {
		return P(e);
	}
	constructor(e = $, t = {}, n) {
		this.options = Object.assign(Object.assign({}, Re), e), this.gs = t, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && h && $e && ($e = !1, Pe(this)), ge(this, () => ((e) => {
			const t = e.getTag(), { length: n } = t;
			let o = "";
			for (let s = 0; s < n; s++) {
				const n = O(s);
				if (void 0 === n) continue;
				const r = e.names.get(n);
				if (void 0 === r || !r.size) continue;
				const i = t.getGroup(s);
				if (0 === i.length) continue;
				const c = l + ".g" + s + "[id=\"" + n + "\"]";
				let a = "";
				for (const e of r) e.length > 0 && (a += e + ",");
				o += i + c + "{content:\"" + a + "\"}/*!sc*/\n";
			}
			return o;
		})(this));
	}
	rehydrate() {
		!this.server && h && Pe(this);
	}
	reconstructWithOptions(e, t = !0) {
		const n = new je(Object.assign(Object.assign({}, this.options), e), this.gs, t && this.names || void 0);
		return n.keyframeIds = new Set(this.keyframeIds), !this.server && h && e.target !== this.options.target && we(this.options.target) !== we(e.target) && Pe(n), n;
	}
	allocateGSInstance(e) {
		return this.gs[e] = (this.gs[e] || 0) + 1;
	}
	getTag() {
		return this.tag || (this.tag = (e = (({ isServer: e, useCSSOMInjection: t, target: n, nonce: o }) => e ? new xe(n) : t ? new Ae(n, o) : new _e(n, o))(this.options), new ye(e)));
		var e;
	}
	hasNameForId(e, t) {
		var n, o;
		return null !== (o = null === (n = this.names.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
	}
	registerName(e, t) {
		P(e), e.startsWith(g) && this.keyframeIds.add(e);
		const n = this.names.get(e);
		n ? n.add(t) : this.names.set(e, /* @__PURE__ */ new Set([t]));
	}
	insertRules(e, t, n) {
		this.registerName(e, t), this.getTag().insertRules(P(e), n);
	}
	clearNames(e) {
		this.names.has(e) && this.names.get(e).clear();
	}
	clearRules(e) {
		this.getTag().clearGroup(P(e)), this.clearNames(e);
	}
	clearTag() {
		this.tag = void 0;
	}
};
var ke = /* @__PURE__ */ new WeakSet(), Te = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexShrink: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function De(e, t) {
	return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in Te || e.startsWith("--") ? String(t).trim() : t + "px";
}
var Me = 47;
function Ve(e) {
	if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const o = e.charCodeAt(n);
		t += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n];
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Ge = Symbol.for("sc-keyframes");
function Fe(e) {
	return "object" == typeof e && null !== e && Ge in e;
}
function ze(e) {
	return ie(e) && !(e.prototype && e.prototype.isReactComponent);
}
var We = (e) => null == e || !1 === e || "" === e, Be = Symbol.for("react.client.reference");
function Le(e) {
	return e.$$typeof === Be;
}
function qe(e) {
	const t = e.$$id, n = (t && t.includes("#") ? t.split("#").pop() : t) || e.name || "unknown";
	console.warn(`Interpolating a client component (${n}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function He(e, t) {
	for (const n in e) {
		const o = e[n];
		e.hasOwnProperty(n) && !We(o) && (Array.isArray(o) && ke.has(o) || ie(o) ? t.push(Ve(n) + ":", o, ";") : pe(o) ? (t.push(n + " {"), He(o, t), t.push("}")) : t.push(Ve(n) + ": " + De(n, o) + ";"));
	}
}
function Ye(e, t, n, o, s = []) {
	if (We(e)) return s;
	const r = typeof e;
	if ("string" === r) return s.push(e), s;
	if ("function" === r) {
		if (Le(e)) return "production" !== process.env.NODE_ENV && qe(e), s;
		if (ze(e) && t) {
			const r = e(t);
			return "production" === process.env.NODE_ENV || "object" != typeof r || Array.isArray(r) || Fe(r) || pe(r) || null === r || console.error(`${B(e)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), Ye(r, t, n, o, s);
		}
		return s.push(e), s;
	}
	if (Array.isArray(e)) {
		for (let r = 0; r < e.length; r++) Ye(e[r], t, n, o, s);
		return s;
	}
	return ce(e) ? (s.push(`.${e.styledComponentId}`), s) : Fe(e) ? (n ? (e.inject(n, o), s.push(e.getName(o))) : s.push(e), s) : Le(e) ? ("production" !== process.env.NODE_ENV && qe(e), s) : pe(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (He(e, s), s) : (s.push(e.toString()), s);
}
var Ue = z(u), Je = p ? /* @__PURE__ */ new WeakMap() : null;
function Xe(e, t) {
	if (!Je) return null;
	const n = Je.get(e);
	if (!n) return null;
	const o = t.names.get(e.componentId);
	if (!o) return null;
	let s = "";
	for (const e of o) {
		const t = n.get(e);
		if (!t) return null;
		s += t;
	}
	return s;
}
var Ze = class {
	constructor(e, t, n) {
		this.rules = e, this.componentId = t, this.baseHash = F(Ue, t), this.baseStyle = n, je.registerId(t);
	}
	generateAndInjectStyles(e, t, n) {
		let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
		{
			let s = "";
			for (let o = 0; o < this.rules.length; o++) {
				const r = this.rules[o];
				if ("string" == typeof r) s += r;
				else if (r) if (ze(r)) {
					const o = r(e);
					"string" == typeof o ? s += o : null != o && !1 !== o && ("production" === process.env.NODE_ENV || "object" != typeof o || Array.isArray(o) || Fe(o) || pe(o) || console.error(`${B(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s += ue(Ye(o, e, t, n)));
				} else s += ue(Ye(r, e, t, n));
			}
			if (s) {
				this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
				const e = n.hash ? n.hash + s : s;
				let r = this.dynamicNameCache.get(e);
				if (!r) {
					if (r = V(F(F(this.baseHash, n.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
						const e = this.dynamicNameCache.keys().next().value;
						void 0 !== e && this.dynamicNameCache.delete(e);
					}
					this.dynamicNameCache.set(e, r);
				}
				if (!t.hasNameForId(this.componentId, r)) if (p && function(e, t) {
					var n, o;
					return null !== (o = null === (n = null == Je ? void 0 : Je.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
				}(this, r)) t.registerName(this.componentId, r);
				else {
					const e = n(s, "." + r, void 0, this.componentId);
					p && function(e, t, n) {
						if (!Je) return;
						let o = Je.get(e);
						o || (o = /* @__PURE__ */ new Map(), Je.set(e, o)), o.set(t, de(n));
					}(this, r, e), t.insertRules(this.componentId, r, e);
				}
				o = ae(o, r);
			}
		}
		return o;
	}
};
var Ke = /&/g;
function Qe(e, t) {
	let n = 0;
	for (; --t >= 0 && 92 === e.charCodeAt(t);) n++;
	return !(1 & ~n);
}
function et(e) {
	const t = e.length;
	let n = "", o = 0, s = 0, r = 0, i = !1, l = !1;
	for (let c = 0; c < t; c++) {
		const a = e.charCodeAt(c);
		if (0 !== r || i || a !== Me || 42 !== e.charCodeAt(c + 1)) if (i) 42 === a && e.charCodeAt(c + 1) === Me && (i = !1, c++);
		else if (34 !== a && 39 !== a || Qe(e, c)) {
			if (0 === r) if (123 === a) s++;
			else if (125 === a) {
				if (s--, s < 0) {
					l = !0;
					let n = c + 1;
					for (; n < t;) {
						const t = e.charCodeAt(n);
						if (59 === t || 10 === t) break;
						n++;
					}
					n < t && 59 === e.charCodeAt(n) && n++, s = 0, c = n - 1, o = n;
					continue;
				}
				0 === s && (n += e.substring(o, c + 1), o = c + 1);
			} else 59 === a && 0 === s && (n += e.substring(o, c + 1), o = c + 1);
		} else 0 === r ? r = a : r === a && (r = 0);
		else i = !0, c++;
	}
	return l || 0 !== s || 0 !== r ? (o < t && 0 === s && 0 === r && (n += e.substring(o)), n) : e;
}
function tt(e, t) {
	const n = t + " ", o = "," + n;
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		if ("rule" === r.type) {
			r.value = (n + r.value).replaceAll(",", o);
			const e = r.props, t = [];
			for (let o = 0; o < e.length; o++) t[o] = n + e[o];
			r.props = t;
		}
		Array.isArray(r.children) && "@keyframes" !== r.type && tt(r.children, t);
	}
	return e;
}
function nt({ options: e = $, plugins: t = x } = $) {
	let n, s, r;
	const i = (e, t, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n}` : e, l = t.slice();
	l.push((e) => {
		e.type === "rule" && e.value.includes("&") && (r || (r = new RegExp(`\\${s}\\b`, "g")), e.props[0] = e.props[0].replace(Ke, s).replace(r, i));
	}), e.prefix && l.push(prefixer), l.push(stringify);
	let c = [];
	const a = middleware(l.concat(rulesheet((e) => c.push(e)))), u = (t, i = "", l = "", u = "&") => {
		n = u, s = i, r = void 0;
		const d = function(e) {
			const t = -1 !== e.indexOf("//"), n = -1 !== e.indexOf("}");
			if (!t && !n) return e;
			if (!t) return et(e);
			const o = e.length;
			let s = "", r = 0, i = 0, l = 0, c = 0, a = 0, u = !1;
			for (; i < o;) {
				const t = e.charCodeAt(i);
				if (34 !== t && 39 !== t || Qe(e, i)) if (0 === l) if (t === Me && i + 1 < o && 42 === e.charCodeAt(i + 1)) {
					for (i += 2; i + 1 < o && (42 !== e.charCodeAt(i) || e.charCodeAt(i + 1) !== Me);) i++;
					i += 2;
				} else if (40 !== t) if (41 !== t) if (c > 0) i++;
				else if (42 === t && i + 1 < o && e.charCodeAt(i + 1) === Me) s += e.substring(r, i), i += 2, r = i, u = !0;
				else if (t === Me && i + 1 < o && e.charCodeAt(i + 1) === Me) {
					for (s += e.substring(r, i); i < o && 10 !== e.charCodeAt(i);) i++;
					r = i, u = !0;
				} else 123 === t ? a++ : 125 === t && a--, i++;
				else c > 0 && c--, i++;
				else c++, i++;
				else i++;
				else 0 === l ? l = t : l === t && (l = 0), i++;
			}
			return u ? (r < o && (s += e.substring(r)), 0 === a ? s : et(s)) : 0 === a ? e : et(e);
		}(t);
		let h = compile(l || i ? l + " " + i + " { " + d + " }" : d);
		return e.namespace && (h = tt(h, e.namespace)), c = [], serialize(h, a), c;
	}, d = e;
	let h = G;
	for (let e = 0; e < t.length; e++) t[e].name || S(15), h = F(h, t[e].name);
	return null != d && d.namespace && (h = F(h, d.namespace)), null != d && d.prefix && (h = F(h, "p")), u.hash = h !== G ? h.toString() : "", u;
}
var ot, st, rt;
var it = new je(), lt = nt();
var ct, at = null, ut = lt, dt = p && null !== (rt = null === (st = (ot = t).cache) || void 0 === st ? void 0 : st.call(ot, () => {
	it.names.clear(), it.keyframeIds.clear(), it.clearTag(), at = null;
})) && void 0 !== rt ? rt : null, ht = {
	shouldForwardProp: void 0,
	styleSheet: it,
	stylis: lt,
	stylisPlugins: void 0
}, pt = p ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(ht)
} : t.createContext(ht);
pt.Consumer;
function mt() {
	return p ? (dt && dt(), at || ht) : t.useContext(pt);
}
function gt(e) {
	var n, o, s;
	if (p) {
		dt && dt();
		const t = at || ht, s = void 0 !== e.stylisPlugins || void 0 !== e.namespace || void 0 !== e.enableVendorPrefixes;
		s && (e.stylisPlugins && e.stylisPlugins !== ct ? (ct = e.stylisPlugins, ut = nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: e.stylisPlugins
		})) : void 0 === e.namespace && void 0 === e.enableVendorPrefixes || (ut = nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (n = e.stylisPlugins) && void 0 !== n ? n : t.stylisPlugins
		})));
		const r = s ? void 0 === e.stylisPlugins || e.stylisPlugins.length ? ut : lt : t.stylis, i = "shouldForwardProp" in e ? e.shouldForwardProp : t.shouldForwardProp, l = null !== (o = e.stylisPlugins) && void 0 !== o ? o : t.stylisPlugins;
		return at = r !== lt || i ? {
			shouldForwardProp: i,
			styleSheet: it,
			stylis: r,
			stylisPlugins: l
		} : null, e.children;
	}
	const r = mt(), { styleSheet: i } = r, l = t.useMemo(() => {
		let t = i;
		return e.sheet ? t = e.sheet : e.target ? t = t.reconstructWithOptions(void 0 !== e.nonce ? {
			target: e.target,
			nonce: e.nonce
		} : { target: e.target }, !1) : void 0 !== e.nonce && (t = t.reconstructWithOptions({ nonce: e.nonce })), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
	}, [
		e.disableCSSOMInjection,
		e.nonce,
		e.sheet,
		e.target,
		i
	]), c = t.useMemo(() => {
		var t;
		return void 0 === e.stylisPlugins && void 0 === e.namespace && void 0 === e.enableVendorPrefixes ? r.stylis : nt({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (t = e.stylisPlugins) && void 0 !== t ? t : r.stylisPlugins
		});
	}, [
		e.enableVendorPrefixes,
		e.namespace,
		e.stylisPlugins,
		r.stylis,
		r.stylisPlugins
	]), a = "shouldForwardProp" in e ? e.shouldForwardProp : r.shouldForwardProp, u = null !== (s = e.stylisPlugins) && void 0 !== s ? s : r.stylisPlugins, d = t.useMemo(() => ({
		shouldForwardProp: a,
		styleSheet: l,
		stylis: c,
		stylisPlugins: u
	}), [
		a,
		l,
		c,
		u
	]);
	return t.createElement(pt.Provider, { value: d }, e.children);
}
var yt = p ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(void 0)
} : t.createContext(void 0);
yt.Consumer;
var wt = {};
function Nt(e, t) {
	const n = "string" != typeof e ? "sc" : T(e);
	wt[n] = (wt[n] || 0) + 1;
	const o = n + "-" + W(u + n + wt[n]);
	return t ? t + "-" + o : o;
}
var Ct;
var Pt = me(() => /* @__PURE__ */ new Set()), Ot = /* @__PURE__ */ new Map();
function Et(e) {
	let t = Ot.get(e);
	return t || (t = new RegExp("\\." + e + "(?![a-zA-Z0-9_-])", "g"), Ot.set(e, t)), t;
}
function It(e, t, n) {
	const o = n.names.get(t);
	if (o) for (const t of o) {
		const n = Et(t);
		n.lastIndex = 0, e = e.replace(n, ":where(." + t + ")");
	}
	return e;
}
function At(o, s, r) {
	const i = ce(o), c = o, a = !L(o), { attrs: u = x, componentId: h = Nt(s.displayName, s.parentComponentId), displayName: f = q(o) } = s, m = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || h, g = i && c.attrs ? c.attrs.concat(u).filter(Boolean) : u;
	let { shouldForwardProp: y } = s;
	if (i && c.shouldForwardProp) {
		const e = c.shouldForwardProp;
		if (s.shouldForwardProp) {
			const t = s.shouldForwardProp;
			y = (n, o) => e(n, o) && t(n, o);
		} else y = e;
	}
	const v = new Ze(r, m, i ? c.componentStyle : void 0);
	function S(o, s) {
		return function(o, s, r) {
			const { attrs: i, componentStyle: c, defaultProps: a, foldedComponentIds: u, styledComponentId: h, target: f } = o, m = p ? void 0 : t.useContext(yt), g = mt(), y = o.shouldForwardProp || g.shouldForwardProp;
			"production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(h);
			const v = R(s, m, a) || (p ? void 0 : $);
			let S, b;
			S = function(e, t, n) {
				const o = Object.assign(Object.assign({}, t), {
					className: void 0,
					theme: n
				}), s = e.length > 1;
				for (let n = 0; n < e.length; n++) {
					const r = e[n], i = ie(r) ? r(s ? Object.assign({}, o) : o) : r;
					for (const e in i) "className" === e ? o.className = ae(o.className, i[e]) : "style" === e ? o.style = Object.assign(Object.assign({}, o.style), i[e]) : e in t && void 0 === t[e] || (o[e] = i[e]);
				}
				return "className" in t && "string" == typeof t.className && (o.className = ae(o.className, t.className)), o;
			}(i, s, v), b = function(e, n, o, s) {
				const r = e.generateAndInjectStyles(n, o, s);
				return "production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(r), r;
			}(c, S, g.styleSheet, g.stylis), "production" !== process.env.NODE_ENV && o.warnTooManyClasses && o.warnTooManyClasses(b);
			const w = S.as || f, N = function(t, n, o, s) {
				const r = {};
				for (const i in t) void 0 === t[i] || "$" === i[0] || "as" === i || "theme" === i && t.theme === o || ("forwardedAs" === i ? r.as = t.forwardedAs : s && !s(i, n) || (r[i] = t[i], s || "development" !== process.env.NODE_ENV || isPropValid(i) || (Ct || (Ct = /* @__PURE__ */ new Set())).has(i) || !L(n) || n.includes("-") || (Ct.add(i), console.warn(`styled-components: it looks like an unknown prop "${i}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
				return r;
			}(S, w, v, y);
			let C = ae(u, h);
			b && (C += " " + b), S.className && (C += " " + S.className), N[L(w) && w.includes("-") ? "class" : "className"] = C, r && (N.ref = r);
			const O = createElement(w, N);
			if (p) {
				const e = Pt ? Pt() : null;
				let n = null, o = 0, s = "", r = !0, i = c;
				for (; i;) {
					const t = g.styleSheet.names.get(i.componentId);
					if (t) {
						o += t.size;
						for (const o of t) e && e.has(o) || (n || (n = []), n.push(o), e && e.add(o));
					}
					if (n && r) {
						let e = Xe(i, g.styleSheet);
						null === e ? r = !1 : (i !== c && (e = It(e, i.componentId, g.styleSheet)), s = e + s);
					}
					i = i.baseStyle;
				}
				if (n && !r) {
					s = "";
					const e = g.styleSheet.getTag();
					let t = c;
					for (; t;) {
						let n = e.getGroup(P(t.componentId));
						n && t !== c && (n = It(n, t.componentId, g.styleSheet)), s = n + s, t = t.baseStyle;
					}
				}
				let a = "";
				if (g.styleSheet.keyframeIds.size > 0) {
					const t = g.styleSheet.getTag();
					for (const n of g.styleSheet.keyframeIds) {
						if (e && e.has(n)) continue;
						const o = t.getGroup(P(n));
						o && (a += o, e && e.add(n));
					}
				}
				if (s && e && n && n.length < o) {
					const e = s.split(d);
					let t = "";
					for (let o = 0; o < e.length; o++) {
						const s = e[o];
						if (s) for (let e = 0; e < n.length; e++) {
							const o = Et(n[e]);
							if (o.lastIndex = 0, o.test(s)) {
								t += s + d;
								break;
							}
						}
					}
					s = t;
				}
				const u = he(a + s);
				if (u) {
					const e = t.createElement("style", {
						[l]: "",
						key: "sc-" + c.componentId,
						children: u
					});
					return t.createElement(t.Fragment, null, e, O);
				}
			}
			return O;
		}(b, o, s);
	}
	S.displayName = f;
	let b = t.forwardRef(S);
	return b.attrs = g, b.componentStyle = v, b.displayName = f, b.shouldForwardProp = y, b.foldedComponentIds = i ? ae(c.foldedComponentIds, c.styledComponentId) : "", b.styledComponentId = m, b.target = i ? c.target : o, Object.defineProperty(b, "defaultProps", {
		get() {
			return this._foldedDefaultProps;
		},
		set(e) {
			this._foldedDefaultProps = i ? function(e, ...t) {
				for (const n of t) fe(e, n, !0);
				return e;
			}({}, c.defaultProps, e) : e;
		}
	}), "production" !== process.env.NODE_ENV && (_(f, m), b.warnTooManyClasses = ((e, t) => {
		let n = {}, o = !1;
		return (s) => {
			!o && (n[s] = !0, Object.keys(n).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e}${t ? ` with the id of "${t}"` : ""}.\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))\`width: 100%;\`\n\n  <Component />`), o = !0, n = {});
		};
	})(f, m)), ge(b, () => `.${b.styledComponentId}`), a && re(b, o, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), b;
}
var _t = /* @__PURE__ */ new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"button",
	"br",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"menu",
	"meter",
	"nav",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"slot",
	"small",
	"span",
	"strong",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"tspan",
	"use"
]);
function xt(e, t) {
	const n = [e[0]];
	for (let o = 0, s = t.length; o < s; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var $t = (e) => (ke.add(e), e);
function Rt(e, ...t) {
	if (ie(e) || pe(e)) return $t(Ye(xt(x, [e, ...t])));
	const n = e;
	return 0 === t.length && 1 === n.length && "string" == typeof n[0] ? Ye(n) : $t(Ye(xt(n, t)));
}
function jt(e, t, n = $) {
	if (!t) throw S(1, t);
	const o = (o, ...s) => e(t, n, Rt(o, ...s));
	return o.attrs = (o) => jt(e, t, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), o.withConfig = (o) => jt(e, t, Object.assign(Object.assign({}, n), o)), o;
}
var kt = (e) => jt(At, e), Tt = kt;
_t.forEach((e) => {
	Tt[e] = kt(e);
});
var Dt = class {
	constructor(e, t) {
		this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e, this.componentId = t, this.isStatic = function(e) {
			for (let t = 0; t < e.length; t += 1) {
				const n = e[t];
				if (ie(n) && !ce(n)) return !1;
			}
			return !0;
		}(e), je.registerId(this.componentId);
	}
	removeStyles(e, t) {
		this.instanceRules.delete(e), this.rebuildGroup(t);
	}
	renderStyles(e, t, n, o) {
		const s = this.componentId;
		if (this.isStatic) {
			if (n.hasNameForId(s, s + e)) this.instanceRules.has(e) || this.computeRules(e, t, n, o);
			else {
				const r = this.computeRules(e, t, n, o);
				n.insertRules(s, r.name, r.rules);
			}
			return;
		}
		const r = this.instanceRules.get(e);
		if (this.computeRules(e, t, n, o), !n.server && r) {
			const t = r.rules, n = this.instanceRules.get(e).rules;
			if (t.length === n.length) {
				let e = !0;
				for (let o = 0; o < t.length; o++) if (t[o] !== n[o]) {
					e = !1;
					break;
				}
				if (e) return;
			}
		}
		this.rebuildGroup(n);
	}
	computeRules(e, t, n, o) {
		const s = ue(Ye(this.rules, t, n, o)), r = {
			name: this.componentId + e,
			rules: o(s, "")
		};
		return this.instanceRules.set(e, r), r;
	}
	rebuildGroup(e) {
		const t = this.componentId;
		e.clearRules(t);
		for (const n of this.instanceRules.values()) e.insertRules(t, n.name, n.rules);
	}
};
var Mt = me(() => /* @__PURE__ */ new Set());
function Vt(e, ...n) {
	const o = Rt(e, ...n), s = `sc-global-${W(JSON.stringify(o))}`, r = new Dt(o, s);
	"production" !== process.env.NODE_ENV && _(s);
	const i = (e) => {
		const n = mt(), l = p ? void 0 : t.useContext(yt);
		let c;
		if (c = n.styleSheet.allocateGSInstance(s), "production" !== process.env.NODE_ENV && t.Children.count(e.children) && console.warn(`The global style component ${s} was given child JSX. createGlobalStyle does not render children.`), "production" !== process.env.NODE_ENV && o.some((e) => "string" == typeof e && -1 !== e.indexOf("@import")) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (p || n.styleSheet.server) && function(e, t, n, o, s) {
			if (r.isStatic) r.renderStyles(e, y, n, s);
			else {
				const l = Object.assign(Object.assign({}, t), { theme: R(t, o, i.defaultProps) });
				r.renderStyles(e, l, n, s);
			}
		}(c, e, n.styleSheet, l, n.stylis), p) {
			const e = "undefined" == typeof window ? r.instanceRules.get(c) : void 0, o = e ? de(e.rules) : "";
			if (o) {
				r.instanceRules.delete(c);
				const e = Mt ? Mt() : null;
				if (e) {
					const t = r.isStatic ? s + n.stylis.hash : o;
					if (e.has(t)) return null;
					e.add(t);
				}
				return t.createElement("style", {
					key: s + "-" + c,
					"data-styled-global": s,
					children: he(o)
				});
			}
		}
		return r.instanceRules.delete(c), null;
	};
	return t.memo(i);
}
var Yt = /^\s*<\/[a-z]/i;
var Ut = class {
	constructor({ nonce: e } = {}) {
		this._emitSheetCSS = () => {
			const e = this.instance.toString();
			if (!e) return "";
			const t = this.instance.options.nonce || Ee();
			return `<style ${ue([
				t && `nonce="${t}"`,
				`${l}="true"`,
				`${a}="${u}"`
			].filter(Boolean), " ")}>${e}</style>`;
		}, this.getStyleTags = () => {
			if (this.sealed) throw S(2);
			return this._emitSheetCSS();
		}, this.getStyleElement = () => {
			if (this.sealed) throw S(2);
			const e = this.instance.toString();
			if (!e) return [];
			const n = {
				[l]: "",
				[a]: u,
				dangerouslySetInnerHTML: { __html: e }
			}, o = this.instance.options.nonce || Ee();
			return o && (n.nonce = o), [t.createElement("style", Object.assign({}, n, { key: "sc-0-0" }))];
		}, this.seal = () => {
			this.sealed = !0;
		}, this.instance = new je({
			isServer: !0,
			nonce: e
		}), this.sealed = !1;
	}
	collectStyles(e) {
		if (this.sealed) throw S(2);
		return t.createElement(gt, { sheet: this.instance }, e);
	}
	interleaveWithNodeStream(e) {
		if (this.sealed) throw S(2);
		this.seal();
		const { Transform: t } = __require("stream"), { instance: n, _emitSheetCSS: o } = this, s = new t({ transform: function(e, t, s) {
			const r = e.toString(), i = o();
			if (n.clearTag(), Yt.test(r)) {
				const e = r.indexOf(">") + 1, t = r.slice(0, e), n = r.slice(e);
				this.push(t + i + n);
			} else this.push(i + r);
			s();
		} });
		if ("on" in e && "function" == typeof e.on && "pipe" in e) {
			const t = e;
			return t.on("error", (e) => {
				s.emit("error", e);
			}), t.pipe(s);
		}
		if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(s);
		throw new Error("Unsupported stream type");
	}
};
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
var Xt = `__sc-${l}__`;
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[Xt] || (window[Xt] = 0), 1 === window[Xt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[Xt] += 1);
`${l}`;
`${l}`;
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/ssr/index.js
/**
* @jsonresume/core/ssr
*
* Server-side render helpers for JSON Resume themes. Every JSX theme's
* `render(resume)` repeats the same boilerplate: spin up a styled-components
* ServerStyleSheet, collect styles while rendering, emit a full
* `<!DOCTYPE html>` document with Google Font <link>s in the <head>, and seal
* the sheet. This module factors that out so a theme's render() can be a single
* call to `renderResumeDocument(<Resume resume={resume} />, { fonts, title })`.
*
* SSR-safe: imports only react-dom/server + styled-components (both already
* core peer/deps) and touches no window/document at module load.
*
* @module @jsonresume/core/ssr
*/
/**
* Minimal, opt-in CSS reset (margin/padding zero + border-box). Themes that
* already ship their own reset leave this off (default); ATS-plain themes that
* want a clean slate pass `reset: true`.
*/
var CSS_RESET = "<style>*,*::before,*::after{box-sizing:border-box}html,body{margin:0;padding:0}body{-webkit-font-smoothing:antialiased}</style>";
/** Stylesheet href for the @jsonresume/core design tokens (CSS custom props). */
var TOKENS_CSS_HREF = "https://unpkg.com/@jsonresume/core/dist/tokens.css";
var FONTS_PRECONNECT = "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>";
/** A value is a ready-made href if it already looks like a URL or <link> tag. */
function isHref(value) {
	return /^(https?:)?\/\//.test(value) || value.trim().startsWith("<link");
}
/** Turn a Google font family name into the css2 `family=` query fragment. */
function familyParam(family) {
	const [name, ...rest] = String(family).split(":");
	const encodedName = name.trim().replace(/\s+/g, "+");
	return rest.length ? `${encodedName}:${rest.join(":")}` : encodedName;
}
/**
* Build the Google Fonts <link> markup for the given families.
*
* Accepts either bare family names / `Family:axis@weights` specs (combined into
* a single css2 request) or fully-formed href strings / `<link>` tags (passed
* through verbatim). Returns an empty string when given nothing.
*
* @param {string[]} [families]
* @returns {string}
*/
function googleFontsLinks(families) {
	if (!Array.isArray(families) || families.length === 0) return "";
	const passthrough = [];
	const names = [];
	for (const entry of families) {
		if (entry == null || entry === "") continue;
		if (isHref(entry)) passthrough.push(entry);
		else names.push(entry);
	}
	const links = passthrough.map((href) => href.trim().startsWith("<link") ? href : `<link href="${href}" rel="stylesheet">`);
	if (names.length > 0) {
		const query = names.map(familyParam).join("&family=");
		links.unshift(`<link href="https://fonts.googleapis.com/css2?family=${query}&display=swap" rel="stylesheet">`);
	}
	if (links.length === 0) return "";
	return FONTS_PRECONNECT + links.join("");
}
/**
* Render a React element to a complete, styled HTML document string using the
* same ServerStyleSheet path themes hand-roll today. The sheet is ALWAYS sealed
* in a finally block so collected styles never leak between renders.
*
* @param {import('react').ReactElement} element  Root resume element to render.
* @param {object} [options]
* @param {string[]} [options.fonts]            Google font families OR hrefs.
* @param {string}   [options.title]            <title> text (omitted if falsy).
* @param {string}   [options.lang='en']        <html lang> attribute.
* @param {string}   [options.dir='ltr']        <html dir> attribute.
* @param {boolean}  [options.reset=false]      Include the minimal CSS reset.
* @param {string}   [options.head='']          Raw HTML inserted in <head> BEFORE the
*   styled-components tags (base styles a theme's components then override — e.g. a
*   `:root` design-token block or a CSS reset).
* @param {string}   [options.headAfterStyles=''] Raw HTML inserted in <head> AFTER the
*   styled-components tags (styles that must OVERRIDE component styles — e.g. a global
*   reset, body background, or `@media print`/`@page` rules). Composes with `head`:
*   a theme can pass both to reproduce an inline-style block on each side.
* @param {boolean}  [options.includeTokensCss=true] Link @jsonresume/core tokens.
* @param {string}   [options.bodyClass]        class attribute on <body>.
* @returns {string} Full `<!DOCTYPE html>...` document.
*/
function renderResumeDocument(element, options = {}) {
	const { fonts, title, lang = "en", dir = "ltr", reset = false, head = "", headAfterStyles = "", includeTokensCss = true, bodyClass } = options;
	const sheet = new Ut();
	let html;
	let styleTags;
	try {
		html = renderToStaticMarkup(sheet.collectStyles(element));
		styleTags = sheet.getStyleTags();
	} finally {
		sheet.seal();
	}
	const fontLinks = googleFontsLinks(fonts);
	const tokensLink = includeTokensCss ? `<link rel="stylesheet" href="${TOKENS_CSS_HREF}">` : "";
	const resetTag = reset ? CSS_RESET : "";
	const titleTag = title ? `<title>${title}</title>` : "";
	const bodyAttr = bodyClass ? ` class="${bodyClass}"` : "";
	return `<!DOCTYPE html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">` + fontLinks + tokensLink + resetTag + head + styleTags + headAfterStyles + titleTag + `</head><body${bodyAttr}>${html}</body></html>`;
}
createContext({
	theme: "professional",
	setTheme: () => {}
});
Vt`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--resume-font-sans);
    font-size: var(--resume-size-body);
    line-height: var(--resume-line-height-normal);
    color: var(--resume-color-primary);
    background: var(--resume-color-background);
  }
`;
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/Section.jsx
/**
* Section Component
* Semantic <section> wrapper for resume sections with consistent spacing
*
* @component
* @example
* <Section id="work-experience">
*   <SectionTitle>Work Experience</SectionTitle>
*   <ListItem {...jobData} />
* </Section>
*/
var StyledSection = Tt.section`
  margin-bottom: ${(props) => props.theme?.spacing?.section || "var(--resume-space-section, 2rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
function Section({ children, className, id, ...rest }) {
	return /* @__PURE__ */ jsx(StyledSection, {
		id,
		className: `resume-section ${className || ""}`.trim(),
		...rest,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/SectionTitle.jsx
/**
* SectionTitle Component
* Styled heading for resume sections with optional icon and accent border
*
* @component
* @example
* <SectionTitle icon="💼">Work Experience</SectionTitle>
* <SectionTitle level="h3">Projects</SectionTitle>
*/
var StyledTitle = Tt.h2`
  font-size: ${(props) => props.theme?.typography?.heading || "var(--resume-size-heading, 16pt)"};
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  margin: 0 0
    ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"}
    0;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(props) => props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)"};

  @media print {
    page-break-after: avoid;
  }
`;
var Icon$6 = Tt.span`
  margin-right: 8px;
  font-size: 1.2em;
`;
function SectionTitle({ children, icon, level = 2, className, ...rest }) {
	return /* @__PURE__ */ jsxs(StyledTitle, {
		as: `h${level}`,
		className: `resume-section-title ${className || ""}`.trim(),
		...rest,
		children: [icon && /* @__PURE__ */ jsx(Icon$6, {
			"aria-hidden": "true",
			className: "resume-icon",
			children: icon
		}), children]
	});
}
Tt.div`
  margin-bottom: ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
Tt.div`
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  font-size: ${(props) => props.theme?.typography?.body || "var(--resume-size-body, 11pt)"};
`;
Tt.div`
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  margin-bottom: 4px;
`;
Tt.div`
  display: flex;
  gap: 12px;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  margin-bottom: 8px;
`;
Tt.p`
  margin: 8px 0;
  line-height: 1.6;
`;
Tt.ul`
  margin: 8px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    line-height: 1.5;
  }
`;
//#endregion
//#region node_modules/.pnpm/@jsonresume+utils@0.2.1/node_modules/@jsonresume/utils/src/dates.js
/**
* Pure date utilities for JSON Resume.
*
* Framework-free: no React, no styled-components. The styled DateRange /
* RelativeDate components in @jsonresume/core import these functions back.
*
* @module @jsonresume/utils/dates
*/
/**
* Date formatting utility with Intl.DateTimeFormat
* Formats date ranges for work/education experience with full locale support
*
* @param {Object} options - DateRange options
* @param {string|Date} options.startDate - Start date (ISO string or Date object)
* @param {string|Date} [options.endDate] - End date (ISO string, Date object, or null/undefined for "Present")
* @param {string} [options.format='short'] - Format style: 'short' (default), 'long', 'numeric'
* @param {string} [options.locale='en-US'] - BCP 47 locale (e.g., 'en-US', 'fr-FR', 'ar-SA')
* @param {string} [options.numberingSystem] - Numbering system (e.g., 'arab', 'latn', 'hanidec')
* @param {string} [options.presentLabel] - Custom label for present/ongoing (defaults to localized)
* @returns {string} Formatted date range
*
* @example
* formatDateRange({ startDate: '2020-01-15', endDate: null })
* // 'Jan 2020 - Present'
*
* @example
* formatDateRange({
*   startDate: '2020-01-15',
*   locale: 'fr-FR',
*   format: 'long'
* })
* // 'janvier 2020 - Présent'
*
* @example
* formatDateRange({
*   startDate: '2020-01-15',
*   locale: 'ar-SA',
*   numberingSystem: 'arab'
* })
* // With Arabic numerals
*/
function formatDateRange({ startDate, endDate, format = "short", locale = "en-US", numberingSystem, presentLabel }) {
	if (!startDate) return "";
	const getPresentLabel = () => {
		if (presentLabel) return presentLabel;
		const labels = {
			en: "Present",
			"en-US": "Present",
			"en-GB": "Present",
			fr: "Présent",
			"fr-FR": "Présent",
			es: "Presente",
			"es-ES": "Presente",
			de: "Heute",
			"de-DE": "Heute",
			it: "Presente",
			"it-IT": "Presente",
			pt: "Presente",
			"pt-BR": "Presente",
			ja: "現在",
			"ja-JP": "現在",
			zh: "至今",
			"zh-CN": "至今",
			"zh-TW": "至今",
			ko: "현재",
			"ko-KR": "현재",
			ar: "حاضر",
			"ar-SA": "حاضر"
		};
		return labels[locale] || labels[locale.split("-")[0]] || "Present";
	};
	const formatDate = (dateStr) => {
		if (!dateStr) return getPresentLabel();
		const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
		if (isNaN(date.getTime())) return dateStr;
		const options = {
			...{
				short: { month: "short" },
				long: { month: "long" },
				numeric: { month: "2-digit" }
			}[format],
			year: "numeric"
		};
		if (numberingSystem) options.numberingSystem = numberingSystem;
		return new Intl.DateTimeFormat(locale, options).format(date);
	};
	const start = formatDate(startDate);
	if (endDate === void 0) return start;
	return `${start} - ${formatDate(endDate)}`;
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/DateRange.jsx
/**
* DateRange Component
* Styled date range display for consistent formatting with full i18n support
*
* @component
* @example
* <DateRange startDate="2020-01-15" endDate={null} />
*
* @example
* <DateRange
*   startDate="2018-06"
*   endDate="2020-03"
*   format="long"
*   locale="fr-FR"
* />
*
* @example
* // Arabic with Arabic-Indic numerals
* <DateRange
*   startDate="2020-01-15"
*   locale="ar-SA"
*   numberingSystem="arab"
* />
*/
var StyledDateRange = Tt.span`
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  white-space: nowrap;
`;
function DateRange({ startDate, endDate, format = "short", locale = "en-US", numberingSystem, presentLabel, className, ...rest }) {
	const formatted = formatDateRange({
		startDate,
		endDate,
		format,
		locale,
		numberingSystem,
		presentLabel
	});
	if (!formatted) return null;
	return /* @__PURE__ */ jsx(StyledDateRange, {
		className: `resume-date-range ${className || ""}`.trim(),
		...rest,
		children: formatted
	});
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/Badge.jsx
/**
* Badge Component
* Display skills, keywords, tags in a badge format
*
* @component
* @example
* <Badge variant="accent">JavaScript</Badge>
* <Badge size="sm">React</Badge>
*/
var StyledBadge = Tt.span`
  display: inline-block;
  padding: ${(props) => {
	if (props.$size === "sm") return "2px 8px";
	if (props.$size === "lg") return "6px 16px";
	return "4px 12px";
}};
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
	if (props.$size === "sm") return "9pt";
	if (props.$size === "lg") return "11pt";
	return "10pt";
}};
  font-weight: 500;
  background: ${(props) => {
	if (props.$variant === "accent") return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, #e6f2ff)";
	if (props.$variant === "secondary") return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
	return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};
  color: ${(props) => {
	if (props.$variant === "accent") return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
	return props.theme?.colors?.primary || "var(--resume-color-primary, #000)";
}};

  @media print {
    background: ${(props) => props.$variant === "accent" ? "#e6f2ff" : "#f5f5f5"};
    color: ${(props) => props.$variant === "accent" ? "#0066cc" : "#000"};
  }
`;
function Badge$3({ children, variant = "default", size = "md", className, ...rest }) {
	return /* @__PURE__ */ jsx(StyledBadge, {
		$variant: variant,
		$size: size,
		className: `resume-badge resume-badge-${variant} ${className || ""}`.trim(),
		...rest,
		children
	});
}
/**
* BadgeList Component
* Render multiple badges in a flex container
*
* @component
* @example
* <BadgeList items={['React', 'TypeScript', 'Node.js']} variant="accent" />
* <BadgeList>
*   <Badge>React</Badge>
*   <Badge variant="accent">TypeScript</Badge>
* </BadgeList>
*/
var BadgeContainer$1 = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;
function BadgeList({ children, items, variant = "default", size = "md", className, ...rest }) {
	const content = items ? items.map((item, index) => /* @__PURE__ */ jsx(Badge$3, {
		variant,
		size,
		children: item
	}, index)) : children;
	return /* @__PURE__ */ jsx(BadgeContainer$1, {
		className: `resume-badge-list ${className || ""}`.trim(),
		...rest,
		children: content
	});
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+utils@0.2.1/node_modules/@jsonresume/utils/src/url.js
/**
* URL safety utilities for JSON Resume.
*
* Framework-free. Prevents XSS attacks and ensures safe URL handling.
*
* @module @jsonresume/utils/url
*/
/**
* Sanitizes URLs to prevent XSS attacks
* - Blocks javascript:, data:, vbscript: schemes
* - Allows http:, https:, mailto:, tel: schemes
* - Returns null for invalid/dangerous URLs
*
* @param {string} url - The URL to sanitize
* @returns {string|null} - Safe URL or null if dangerous
*
* @example
* safeUrl('https://example.com') // 'https://example.com'
* safeUrl('javascript:alert(1)') // null
* safeUrl('mailto:user@example.com') // 'mailto:user@example.com'
*/
function safeUrl(url) {
	if (!url || typeof url !== "string") return null;
	const trimmed = url.trim();
	if (/^(javascript|data|vbscript|file|about):/i.test(trimmed)) return null;
	if (/^(https?|mailto|tel|sms|ftp):/i.test(trimmed)) return trimmed;
	if (trimmed.startsWith("/") || trimmed.startsWith(".")) return trimmed;
	if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
	if (/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(trimmed)) return `https://${trimmed}`;
	return trimmed;
}
/**
* Checks if a URL is external (different origin)
*
* @param {string} url - URL to check
* @param {string} [currentOrigin=null] - Current site origin (default: window.location.origin if available)
* @returns {boolean} - True if URL is external
*
* @example
* isExternalUrl('https://example.com') // true (if on different domain)
* isExternalUrl('/about') // false
*/
function isExternalUrl(url, currentOrigin = null) {
	if (!url || typeof url !== "string") return false;
	if (url.startsWith("/") || url.startsWith(".") || url.startsWith("#")) return false;
	if (/^(mailto|tel|sms):/i.test(url)) return false;
	if (!currentOrigin && typeof window !== "undefined") currentOrigin = window.location.origin;
	if (!currentOrigin) return true;
	try {
		return new URL(url, currentOrigin).origin !== currentOrigin;
	} catch (e) {
		return true;
	}
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx
/**
* ContactInfo Component
* Displays contact information from resume basics
*
* @component
* @example
* <ContactInfo basics={resume.basics} />
*/
var ContactContainer = Tt.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.small || "var(--resume-space-small, 12px)"};
  flex-wrap: wrap;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.text || "var(--resume-color-text, #333)"};

  a {
    color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
var ContactItem$1 = Tt.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
var Separator$6 = Tt.span`
  color: ${(props) => props.theme?.colors?.muted || "var(--resume-color-muted, #999)"};
`;
function ContactInfo({ basics = {}, separator = "•", className }) {
	const { email, phone, url, location, profiles = [] } = basics;
	const items = [];
	if (email) items.push(/* @__PURE__ */ jsx(ContactItem$1, { children: /* @__PURE__ */ jsx("a", {
		href: safeUrl(`mailto:${email}`),
		"aria-label": "Email",
		children: email
	}) }, "email"));
	if (phone) items.push(/* @__PURE__ */ jsx(ContactItem$1, { children: /* @__PURE__ */ jsx("a", {
		href: safeUrl(`tel:${phone}`),
		"aria-label": "Phone",
		children: phone
	}) }, "phone"));
	if (location) {
		const locationStr = [
			location.city,
			location.region,
			location.countryCode
		].filter(Boolean).join(", ");
		if (locationStr) items.push(/* @__PURE__ */ jsx(ContactItem$1, {
			"aria-label": "Location",
			children: locationStr
		}, "location"));
	}
	if (url) {
		const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
		items.push(/* @__PURE__ */ jsx(ContactItem$1, { children: /* @__PURE__ */ jsx("a", {
			href: safeUrl(url),
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Website",
			children: displayUrl
		}) }, "url"));
	}
	profiles.forEach((profile, index) => {
		if (profile.url) items.push(/* @__PURE__ */ jsx(ContactItem$1, { children: /* @__PURE__ */ jsx("a", {
			href: safeUrl(profile.url),
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": profile.network,
			children: profile.network || profile.username
		}) }, `profile-${index}`));
	});
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx(ContactContainer, {
		className: `resume-contact ${className || ""}`.trim(),
		children: items.map((item, index) => /* @__PURE__ */ jsxs(t.Fragment, { children: [index > 0 && /* @__PURE__ */ jsx(Separator$6, {
			"aria-hidden": "true",
			children: separator
		}), item] }, index))
	});
}
//#endregion
//#region node_modules/.pnpm/@jsonresume+core@0.3.1_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@jsonresume/core/src/primitives/Link.jsx
/**
* Link Component
* Safe link component with security checks
*
* @component
* @example
* <Link href="https://example.com">Visit Site</Link>
*/
var StyledLink = Tt.a`
  color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme?.colors?.linkVisited || "var(--resume-color-link-visited, #551a8b)"};
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`;
function Link$6({ href, children, className, ...rest }) {
	const safeHref = safeUrl(href);
	if (!safeHref) return /* @__PURE__ */ jsx("span", {
		className,
		children
	});
	const externalProps = isExternalUrl(safeHref) ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {};
	return /* @__PURE__ */ jsx(StyledLink, {
		href: safeHref,
		className: `resume-link ${className || ""}`.trim(),
		...externalProps,
		...rest,
		children
	});
}
Tt.span`
  /* Thin space (U+2009) + pipe + thin space for balanced spacing */
  &::before {
    content: '\u2009|\u2009';
    opacity: 0.5;
    color: ${(props) => props.$color || "currentColor"};
    font-weight: normal;
  }

  /* Ensure consistent spacing across browsers */
  display: inline;
  white-space: pre;

  @media print {
    &::before {
      content: '\u2009|\u2009';
      opacity: 0.6;
    }
  }
`;
Tt.hr`
  border: none;
  border-top: 0.5pt solid
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-left: ${(props) => props.inset || "0"};
  margin-right: ${(props) => props.inset || "0"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    border-top-width: 0.3pt;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure border renders in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.hr`
  border: none;
  border-top: ${(props) => props.dotSize || "2px"} dotted
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  /* Override default border-top-width to use fixed spacing */
  ${(props) => props.spacing && `
    background-image: radial-gradient(
      circle,
      ${props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"} ${props.dotSize || "2px"},
      transparent ${props.dotSize || "2px"}
    );
    background-size: ${props.spacing} 1px;
    background-repeat: repeat-x;
    background-position: center;
    border: none;
    height: 1px;
  `}

  @media print {
    /* Ensure dots render in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Fixed dot rendering for PDF generation */
    border-top-width: ${(props) => props.dotSize || "2px"};
  }
`;
Tt.div`
  position: absolute;
  ${(props) => props.position === "right" ? "right: 0;" : "left: 0;"}
  top: ${(props) => props.top || "0"};
  width: ${(props) => props.width || "4mm"};
  max-width: 6mm; /* ATS-safe maximum */
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  pointer-events: none; /* Prevent interaction */

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks inside stripe */
    page-break-inside: avoid;
  }

  @media screen and (max-width: 768px) {
    /* Reduce width on mobile */
    width: ${(props) => props.width ? `calc(${props.width} * 0.75)` : "3mm"};
  }
`;
Tt.div`
  width: ${(props) => props.width || "30%"};
  max-width: 40%; /* Design constraint: max 40% */
  min-width: 25%; /* Design constraint: min 25% */
  height: ${(props) => props.thickness || "2.5pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-left: ${(props) => {
	if (props.align === "center") return "auto";
	if (props.align === "right") return "auto";
	return "0";
}};
  margin-right: ${(props) => {
	if (props.align === "center") return "auto";
	if (props.align === "right") return "0";
	return "auto";
}};

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure minimum thickness for print visibility */
    min-height: 2pt;
  }

  @media screen and (max-width: 768px) {
    /* Increase width slightly on mobile for better visibility */
    width: ${(props) => props.width ? `calc(${props.width} * 1.2)` : "36%"};
  }
`;
Tt.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
Tt.div`
  width: 100%;
  height: ${(props) => props.thickness || "0.4pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-bottom: ${(props) => props.gapSize};

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    min-height: 0.3pt;
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns === 1 ? "1fr" : `repeat(${props.$columns}, 1fr)`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
Tt.div`
  display: grid;
  grid-template-columns: ${(props) => props.$sidebarPosition === "right" ? `1fr ${props.$sidebarWidth || "30%"}` : `${props.$sidebarWidth || "30%"} 1fr`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
Tt.aside`
  grid-area: ${(props) => props.$position === "right" ? "1 / 2" : "1 / 1"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
Tt.main`
  grid-area: ${(props) => props.$sidebarPosition === "right" ? "1 / 1" : "1 / 2"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
Tt.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$spacing || "var(--resume-space-item)"};

  @media print {
    gap: ${(props) => props.$spacing || "12px"};
  }
`;
Tt.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.$minCardWidth || "250px"}, 1fr)
  );
  gap: ${(props) => props.$gap || "var(--resume-space-item)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${(props) => props.$gap || "12px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
Tt.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  flex-wrap: ${(props) => props.$wrap ? "wrap" : "nowrap"};
  gap: ${(props) => props.$gap || "var(--resume-space-tight)"};

  @media print {
    gap: ${(props) => props.$gap || "8px"};
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.$responsiveDirection || props.$direction === "row" ? "column" : props.$direction};
  }
`;
Tt.div`
  /* Use CSS columns for visual two-column layout */
  column-count: 2;
  column-gap: ${(props) => props.$columnGap || "16px"};

  /* Prevent column breaks inside items */
  & > * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: ${(props) => props.$gap || "8px"};
    display: block;
  }

  /* Last item in each column shouldn't have bottom margin */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    column-count: 2;
    column-gap: 12pt;

    & > * {
      margin-bottom: 6pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }

  /* Collapse to single column on small screens */
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    & > * {
      margin-bottom: ${(props) => props.$gap || "8px"};
    }
  }
`;
Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
Tt.div`
  width: 100%;
  height: ${(props) => props.$height || "8px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.span`
  display: inline-block;
  padding: ${(props) => props.$size === "small" ? "4px 8px" : "6px 12px"};
  margin: 4px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "#ffffff" : "var(--resume-color-primary)"};
  border: ${(props) => props.$variant === "outlined" ? "1px solid var(--resume-color-border)" : "none"};
  border-radius: ${(props) => props.$rounded ? "999px" : "var(--resume-radius-sm)"};
  font-size: ${(props) => props.$size === "small" ? "var(--resume-size-small)" : "var(--resume-size-body)"};
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 2px;
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);
`;
Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
Tt.div`
  display: flex;
  gap: 4px;
`;
Tt.span`
  width: ${(props) => props.$size || "10px"};
  height: ${(props) => props.$size || "10px"};
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  margin-bottom: var(--resume-space-item);
`;
Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &:not(:last-child)::after {
    content: '${(props) => props.$separator || "•"}';
    margin-left: 6px;
    color: var(--resume-color-border);
  }
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
Tt.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: ${(props) => {
	if (props.$weight >= 80) return "var(--resume-size-subheading)";
	if (props.$weight >= 50) return "var(--resume-size-body)";
	return "var(--resume-size-small)";
}};
  font-weight: ${(props) => props.$weight >= 70 ? "var(--resume-weight-semibold)" : "var(--resume-weight-normal)"};
  color: var(--resume-color-primary);
  background-color: ${(props) => `color-mix(in srgb, var(--resume-color-accent) ${props.$weight}%, transparent)`};
  border-radius: var(--resume-radius-sm);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  margin-bottom: var(--resume-space-item);
`;
Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
  border-bottom: 1px solid var(--resume-color-border);
  padding-bottom: 4px;
`;
Tt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
Tt.span`
  flex: 1;
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
Tt.div`
  position: relative;
  margin-bottom: var(--resume-space-section);

  @media print {
    page-break-inside: avoid;
  }
`;
Tt.div`
  position: relative;
  padding-left: ${(props) => props.$showLine ? "32px" : "0"};
  margin-bottom: var(--resume-space-item);

  ${(props) => props.$showLine && `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background-color: var(--resume-color-border);
    }

    &:last-child::before {
      display: none;
    }
  `}

  @media print {
    break-inside: avoid;
  }
`;
Tt.div`
  position: absolute;
  left: 0;
  top: 6px;
  width: ${(props) => props.$size || "16px"};
  height: ${(props) => props.$size || "16px"};
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border: 2px solid var(--resume-color-background);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  display: flex;
  flex-direction: column;
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;
Tt.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-item, 12pt);

  @media print {
    break-inside: avoid;
  }
`;
Tt.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${(props) => props.$lineColor || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-left: 20px;
`;
Tt.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.$width || "8px"};
  height: ${(props) => {
	const height = props.$height || "2pt";
	const value = parseFloat(height);
	const unit = height.replace(/[\d.]/g, "");
	return value < 2 && unit === "pt" ? "2pt" : height;
}};
  background-color: ${(props) => props.$color || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    min-height: 2pt; /* Ensure visibility in print */
  }
`;
Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  font-weight: var(--resume-weight-normal, 400);
  white-space: nowrap;
  flex-shrink: 0;
`;
Tt.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;
Tt.span`
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  font-weight: var(--resume-weight-medium, 500);
`;
Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-tertiary, #999);
`;
Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  white-space: nowrap;
  font-variant-numeric: tabular-nums; /* Consistent number width */

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.span`
  font-weight: var(--resume-weight-normal, 400);
`;
Tt.span`
  /* En dash with narrow no-break spaces for proper typography */
  margin: 0;
  padding: 0;
`;
Tt.img`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  object-fit: cover;
  border: ${(props) => props.$border ? `2px solid var(--resume-color-border)` : "none"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  background-color: var(--resume-color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(props) => props.$size || "80px"} / 2);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-semibold);
`;
Tt.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  align-items: ${(props) => props.$direction === "row" ? "center" : "flex-start"};
  gap: var(--resume-space-item);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-section);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
Tt.div`
  flex: 1;
`;
Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-tight) 0;
`;
Tt.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;
Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
Tt.span`
  color: var(--resume-color-accent);
`;
Tt.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent);
  }

  @media print {
    color: var(--resume-color-secondary);
  }
`;
Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
`;
Tt.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  text-decoration: none;
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--resume-color-accent);
    color: #ffffff;
    border-color: var(--resume-color-accent);
  }

  @media print {
    border: 1px solid var(--resume-color-border);
    color: var(--resume-color-primary);
  }
`;
Tt.span`
  display: inline-flex;
`;
Tt.h1`
  font-size: ${(props) => {
	const sizes = {
		1: "var(--resume-size-name)",
		2: "var(--resume-size-heading)",
		3: "var(--resume-size-subheading)",
		4: "var(--resume-size-body)"
	};
	return sizes[props.$level] || sizes[2];
}};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-semibold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  margin: 0 0 ${(props) => props.$spacing || "var(--resume-space-tight)"} 0;
  line-height: var(--resume-line-height-tight);
`;
Tt.p`
  font-size: ${(props) => props.$size || "var(--resume-size-body)"};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-normal)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: ${(props) => props.$lineHeight || "var(--resume-line-height-normal)"};
  margin: 0 0 ${(props) => props.$spacing || "0"} 0;
`;
Tt.span`
  display: inline-block;
  font-size: var(--resume-size-small);
  font-weight: ${(props) => props.$weight || "var(--resume-weight-medium)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  text-transform: ${(props) => props.$uppercase ? "uppercase" : "none"};
  letter-spacing: ${(props) => props.$uppercase ? "0.05em" : "normal"};
`;
Tt.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-item) 0;
  max-width: ${(props) => props.$maxWidth || "100%"};

  /* Softer appearance for intro text */
  opacity: 0.95;

  /* Print optimization - maintain readability */
  @media print {
    line-height: var(--resume-line-height-normal);
    opacity: 1;
    page-break-inside: avoid;
  }
`;
Tt.blockquote`
  margin: 0 0 var(--resume-space-item) 0;
  padding: 2px 0 2px ${(props) => props.$paddingLeft || "16px"};
  border-left: ${(props) => props.$borderWidth || "3px"} solid
    ${(props) => props.$accentColor || "var(--resume-color-accent)"};

  font-size: var(--resume-size-body);
  font-style: ${(props) => props.$fontStyle || "italic"};
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-normal);

  /* Prevent quote clipping with subtle padding */
  padding-right: 2px;

  /* Single-line constraint */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Print optimization */
  @media print {
    page-break-inside: avoid;
    color: #000;
    border-left-color: ${(props) => props.$accentColor || "#000"};
  }
`;
Tt.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-normal);
  text-align: ${(props) => props.$textAlign || "left"};
  margin: 0 0 var(--resume-space-tight) 0;

  /* Enable hyphenation for better text flow */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  /* Prevent orphans and widows */
  orphans: 2;
  widows: 2;

  /* Balanced text wrapping */
  text-wrap: balance;

  /* Optional line clamping */
  ${(props) => props.$maxLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${props.$maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Print optimization - disable hyphenation for cleaner output */
  @media print {
    hyphens: none;
    -webkit-hyphens: none;
    page-break-inside: avoid;
    text-wrap: pretty;
  }
`;
Tt.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
Tt.svg`
  transform: rotate(-90deg);
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-medium);
`;
Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  text-align: ${(props) => props.$align || "left"};

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
Tt.div`
  font-size: ${(props) => props.$size || "var(--resume-size-name)"};
  font-weight: var(--resume-weight-bold);
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  line-height: 1;
  margin-bottom: 4px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-top: 4px;
`;
Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-semibold);
`;
Tt.div`
  width: 100%;
  height: ${(props) => props.$height || "24px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;
  position: relative;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  width: ${(props) => props.$percentage}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: #ffffff;
  font-weight: var(--resume-weight-medium);
  white-space: nowrap;
`;
Tt.strong`
  font-weight: ${(props) => {
	if (props.$size === "sm") return "var(--resume-weight-semibold, 600)";
	if (props.$size === "lg") return "var(--resume-weight-extrabold, 800)";
	return "var(--resume-weight-bold, 700)";
}};
  font-size: ${(props) => {
	if (props.$size === "sm") return "0.95em";
	if (props.$size === "lg") return "1.1em";
	return "1em";
}};
  color: inherit;
  white-space: nowrap;

  @media print {
    font-weight: ${(props) => {
	if (props.$size === "sm") return "600";
	if (props.$size === "lg") return "800";
	return "700";
}};
    color: inherit;
  }
`;
Tt.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${(props) => props.$spacing === "tight" ? "4px" : "8px"};
  line-height: 1.5;
  list-style: none;

  @media print {
    page-break-inside: avoid;
  }
`;
Tt.span`
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #000);
  min-width: ${(props) => props.$align === "right" ? "auto" : "60px"};
  max-width: ${(props) => props.$align === "right" ? "80px" : "auto"};
  margin-right: ${(props) => props.$align === "right" ? "12px" : "0"};
  margin-left: ${(props) => props.$align === "right" ? "0" : "12px"};
  text-align: ${(props) => props.$align === "right" ? "right" : "left"};
  flex-shrink: 0;
  white-space: nowrap;

  ${(props) => props.$align === "right" ? `
    order: -1;
  ` : ""}

  @media print {
    font-weight: 700;
    color: #000;
  }
`;
Tt.span`
  flex: 1;
  color: var(--resume-color-primary, #000);
`;
Tt.span`
  margin-right: 8px;
  color: var(--resume-color-accent, #0066cc);
  font-weight: var(--resume-weight-bold, 700);

  @media print {
    color: #333;
  }
`;
Tt.ul`
  margin: 8px 0;
  padding-left: 0;
  list-style: none;
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$gap || "8px"};
  align-items: center;
  margin: ${(props) => props.$margin || "8px 0"};

  @media print {
    gap: 6px;
  }
`;
Tt.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
	if (props.$size === "xs") return "2px 8px";
	if (props.$size === "md") return "4px 12px";
	return "3px 10px";
}};
  border-radius: ${(props) => props.theme?.radius?.full || "var(--resume-radius-full, 999px)"};
  border: 1px solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  background: transparent;
  font-size: ${(props) => {
	if (props.$size === "xs") return "8pt";
	if (props.$size === "md") return "10pt";
	return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  white-space: nowrap;
  line-height: 1.2;

  @media print {
    border: 1px solid #ccc;
    background: transparent;
    color: #000;
    padding: ${(props) => {
	if (props.$size === "xs") return "2px 6px";
	if (props.$size === "md") return "3px 10px";
	return "2px 8px";
}};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.span`
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  font-size: ${(props) => {
	if (props.$size === "xs") return "8pt";
	if (props.$size === "md") return "10pt";
	return "9pt";
}};
  user-select: none;

  @media print {
    color: #ccc;
  }
`;
Tt.span`
  display: inline;
  font-size: ${(props) => {
	if (props.$size === "xs") return "9pt";
	if (props.$size === "md") return "11pt";
	return "10pt";
}};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  line-height: 1.5;

  @media print {
    color: #333;
  }
`;
Tt.span`
  display: inline;
  white-space: normal;
`;
Tt.span`
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    font-weight: 500;
    color: #000;
  }
`;
Tt.span`
  /* Prevent wrap between key and colon */
  white-space: nowrap;

  &::after {
    content: ':';
    margin-right: 0.25em;
  }
`;
Tt.span`
  /* Prevent wrap immediately after colon */
  display: inline-block;
  color: inherit;
`;
Tt.span`
  &::before {
    content: ', ';
    white-space: pre;
  }
`;
Tt.hr`
  width: 100%;
  height: ${(props) => props.$thickness || "1px"};
  background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item)"} 0;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "var(--resume-space-item)"};
  flex-shrink: 0;
`;
Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-item);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--resume-space-tight);
  flex-wrap: wrap;
  gap: 8px;
`;
Tt.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: var(--resume-space-tight);
`;
Tt.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;
Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--resume-space-item);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
Tt.div`
  padding: var(--resume-space-item);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);

  @media print {
    break-inside: avoid;
  }
`;
Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  margin-bottom: 4px;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  gap: var(--resume-space-tight);

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`;
Tt.div`
  flex: 1;
`;
Tt.span`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &::before {
    content: ' at ';
  }
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  white-space: nowrap;
`;
Tt.header`
  text-align: center;
  margin-bottom: var(--resume-space-section);

  @media print {
    break-after: avoid;
  }
`;
Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-item) 0;
`;
Tt.div`
  display: flex;
  justify-content: center;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
Tt.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
Tt.div`
  flex: 1;
`;
Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0;
`;
Tt.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
Tt.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--resume-space-item);
  border-bottom: 2px solid var(--resume-color-border);
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    border-bottom: 2px solid var(--resume-color-border);
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
Tt.h1`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.div`
  position: ${(props) => props.$position === "absolute" ? "absolute" : "relative"};
  ${(props) => props.$corner === "top-left" && "top: 0; left: 0;"}
  ${(props) => props.$corner === "top-right" && "top: 0; right: 0;"}
  ${(props) => props.$corner === "bottom-left" && "bottom: 0; left: 0;"}
  ${(props) => props.$corner === "bottom-right" && "bottom: 0; right: 0;"}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || "48px"};
  height: ${(props) => props.$size || "48px"};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  font-family: ${(props) => props.$serif ? "Georgia, \"Times New Roman\", serif" : "inherit"};
  font-size: ${(props) => props.$fontSize || "calc(var(--resume-size-heading) * 0.8)"};
  font-weight: ${(props) => props.$outline ? "var(--resume-weight-normal)" : "var(--resume-weight-bold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.$outline ? "1px" : "0"};

  ${(props) => props.$outline && `
    -webkit-text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    -webkit-text-fill-color: transparent;
    text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    text-fill-color: transparent;
  `}

  ${(props) => props.$bordered && `
    border: 2px solid ${props.$color || "var(--resume-color-primary)"};
    border-radius: ${props.$rounded ? "50%" : "var(--resume-radius-sm)"};
    padding: ${props.$padding || "8px"};
    width: ${props.$size || "48px"};
    height: ${props.$size || "48px"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media print {
    ${(props) => props.$outline && `
      color: ${props.$color || "var(--resume-color-primary)"};
      -webkit-text-stroke: none;
      -webkit-text-fill-color: ${props.$color || "var(--resume-color-primary)"};
      font-weight: var(--resume-weight-normal);
    `}
  }
`;
Tt.footer`
  margin-top: var(--resume-space-section);
  padding-top: var(--resume-space-item);
  border-top: 1px solid var(--resume-color-border);
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "center"};

  @media print {
    border-top: 1px solid var(--resume-color-border);
    position: running(footer);
  }
`;
Tt.span`
  @media print {
    &::after {
      content: counter(page);
    }
  }
`;
Tt.div`
  @media print {
    page-break-before: ${(props) => props.$before ? "always" : "auto"};
    page-break-after: ${(props) => props.$after ? "always" : "auto"};
    break-before: ${(props) => props.$before ? "page" : "auto"};
    break-after: ${(props) => props.$after ? "page" : "auto"};
  }

  @media screen {
    display: none;
  }
`;
Tt.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
Tt.div`
  font-size: var(--resume-size-small, 10px);
  font-weight: var(--resume-weight-medium, 500);
  color: var(--resume-color-secondary, #4a4a4a);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--resume-space-tight, 8px);

  @media print {
    color: #4a4a4a; /* Ensure print visibility */
  }
`;
Tt.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  letter-spacing: -0.02em; /* Subtle negative tracking, avoid excessive spacing */
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
  max-width: fit-content;
  line-height: var(--resume-line-height-tight, 1.2);

  /* Ensure 4.5:1 contrast ratio */
  @media print {
    color: #000000;
    border-bottom-color: #999999;
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-body, 11px);
  color: var(--resume-color-secondary, #4a4a4a);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Prevent wrapping to maintain single-line layout */
  flex-wrap: nowrap;

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast for print */
  }

  /* Handle overflow gracefully on very narrow screens */
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 8px;
  }
`;
Tt.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;
Tt.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent, #2563eb);
    text-decoration: underline;
  }

  @media print {
    color: #333333;
    text-decoration: none;
  }
`;
Tt.span`
  color: var(--resume-color-border, #e5e7eb);
  user-select: none;
  font-weight: var(--resume-weight-normal, 400);

  @media print {
    color: #999999;
  }
`;
Tt.div`
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
Tt.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
Tt.hr`
  width: ${(props) => props.$width || "100%"};
  height: 0;
  border: none;
  border-top: 0.5px solid
    ${(props) => props.$color || "var(--resume-color-border, #e5e7eb)"};
  margin: 0;

  /* Ensure visibility in print */
  @media print {
    border-top-width: 1px;
    border-top-color: ${(props) => props.$color || "#cccccc"};
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
Tt.div`
  width: ${(props) => props.$width || "4px"};
  height: 0.7em; /* Match x-height of text, not full line-height */
  background-color: ${(props) => props.$color || "var(--resume-color-accent, #2563eb)"};
  border-radius: 2px;
  flex-shrink: 0;

  /* Ensure visibility in print */
  @media print {
    background-color: ${(props) => props.$color || "#000000"};
  }
`;
Tt.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
Tt.header`
  text-align: ${(props) => props.$align || "center"};
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
Tt.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 4px 0;
  line-height: var(--resume-line-height-tight, 1.2);
  letter-spacing: -0.02em;

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
Tt.div`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-medium, 500); /* Avoid thin weights */
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-normal, 1.5);

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast */
  }
`;
Tt.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: var(--resume-weight-normal, 400);
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0;
  line-height: var(--resume-line-height-relaxed, 1.75);
  max-width: 600px;
  margin-left: ${(props) => props.$align === "center" ? "auto" : "0"};
  margin-right: ${(props) => props.$align === "center" ? "auto" : props.$align === "right" ? "0" : "auto"};

  @media print {
    color: #4a4a4a;
  }
`;
Tt.blockquote`
  margin: var(--resume-space-section) 0;
  padding: var(--resume-space-item);
  border-left: 4px solid var(--resume-color-accent);
  background-color: var(--resume-color-muted);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid var(--resume-color-accent);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.p`
  font-size: var(--resume-size-subheading);
  font-style: italic;
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-tight) 0;
`;
Tt.footer`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: right;
`;
Tt.cite`
  font-style: normal;
  font-weight: var(--resume-weight-medium);
`;
Tt.span`
  display: block;
  font-size: var(--resume-size-tiny);
  margin-top: 2px;
`;
Tt.div`
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-tight);
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
`;
Tt.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
Tt.div`
  flex: 1;
`;
Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.blockquote`
  margin: 0;
  font-size: var(--resume-size-body);
  font-style: italic;
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.blockquote`
  margin: var(--resume-space-item) 0;
  padding: var(--resume-space-tight) var(--resume-space-item);
  border-left: 3px solid var(--resume-color-border);
  font-style: italic;
  color: var(--resume-color-secondary);
  background-color: ${(props) => props.$highlight ? "var(--resume-color-muted)" : "transparent"};
  break-inside: avoid;

  @media print {
    border-left: 3px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
`;
Tt.cite`
  display: block;
  margin-top: var(--resume-space-tight);
  font-size: var(--resume-size-small);
  font-style: normal;
  color: var(--resume-color-tertiary);
`;
Tt.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-primary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  font-weight: var(--resume-weight-medium);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 6px 12px;
  }
`;
Tt.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
Tt.span`
  white-space: nowrap;
`;
Tt.span`
  opacity: 0.8;
  font-size: var(--resume-size-tiny);
  font-weight: var(--resume-weight-normal);
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
Tt.span`
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
`;
Tt.span`
  color: var(--resume-color-primary);
`;
Tt.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  background-color: var(--resume-color-background);
  padding: 2px 6px;
  border-radius: var(--resume-radius-sm);
  border: 1px solid var(--resume-color-border);

  @media print {
    background-color: transparent;
    border: 1px solid var(--resume-color-border);
    padding: 1px 4px;
  }
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  font-style: italic;
`;
Tt.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  font-size: var(--resume-size-small);

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
Tt.span`
  color: var(--resume-color-tertiary);

  &::before {
    content: '·';
  }
`;
Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: 8px;
`;
Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
Tt.div`
  flex: 1;
`;
Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 2px;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
Tt.span`
  font-weight: var(--resume-weight-medium);
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.div`
  width: 100%;
  height: 10px;
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    gap: 0.5em;
  }
`;
Tt.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex: 1;
`;
Tt.span`
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  letter-spacing: 2px;
  white-space: nowrap;

  @media print {
    letter-spacing: 3px;
  }
`;
Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--resume-space-tight);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
  }
`;
Tt.div`
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
Tt.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
Tt.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
Tt.span`
  min-width: 120px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: var(--resume-size-small);
  }
`;
Tt.div`
  display: flex;
  gap: 4px;
  flex: 1;
`;
Tt.div`
  flex: 1;
  height: ${(props) => props.$size || "12px"};
  background-color: ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-xs);
  transition: background-color 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
Tt.span`
  min-width: 80px;
  text-align: right;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;
Tt.div`
  padding: var(--resume-space-tight) 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-style: italic;
  margin-bottom: 8px;
`;
Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.a`
  display: inline-block;
  margin-top: 8px;
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;
Tt.div`
  margin-bottom: var(--resume-space-tight);
  padding-left: 1.5em;
  text-indent: -1.5em;
  break-inside: avoid;
  line-height: var(--resume-line-height-relaxed);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text$5 = Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
Tt(Text$5)`
  font-weight: var(--resume-weight-medium);
`;
Tt(Text$5)`
  color: var(--resume-color-secondary);
`;
Tt(Text$5)`
  font-style: italic;
`;
Tt(Text$5)`
  color: var(--resume-color-secondary);
`;
Tt.span`
  margin: 0 0.5em;
  color: var(--resume-color-tertiary);
`;
Tt.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  margin-left: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--resume-space-item);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--resume-space-tight);
  }
`;
Tt.div`
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  overflow: hidden;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media print {
    height: 100px;
  }
`;
Tt.div`
  padding: var(--resume-space-tight);
`;
Tt.h3`
  margin: 0 0 4px 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.p`
  margin: 0 0 8px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
Tt.span`
  padding: 2px 8px;
  font-size: var(--resume-size-tiny);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
Tt.p`
  margin: 0 0 var(--resume-space-tight) 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--resume-space-tight);
`;
Tt.span`
  padding: 4px 10px;
  font-size: var(--resume-size-small);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
`;
Tt.a`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;
Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
Tt.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.th`
  padding: 10px;
  text-align: left;
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.tbody``;
Tt.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.td`
  padding: 10px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Tt.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => {
	if (props.$level === "expert") return "var(--resume-color-accent)";
	if (props.$level === "advanced") return "var(--resume-color-success)";
	if (props.$level === "intermediate") return "var(--resume-color-warning)";
	return "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => {
	if (props.$level === "expert") return "var(--resume-color-accent)";
	if (props.$level === "advanced") return "var(--resume-color-success)";
	if (props.$level === "intermediate") return "var(--resume-color-warning)";
	return "var(--resume-color-border)";
}};
  }
`;
Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
Tt.thead``;
Tt.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  background-color: var(--resume-color-muted);
  border: 1px solid var(--resume-color-border);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.tbody``;
Tt.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    display: block;
    overflow-x: auto;
  }
`;
Tt.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);
  white-space: nowrap;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.tbody``;
Tt.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.$striped ? "var(--resume-color-background)" : "transparent"};
  }

  &:hover {
    background-color: var(--resume-color-muted);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:hover {
      background-color: transparent;
    }
  }
`;
Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
Tt.tfoot`
  background-color: var(--resume-color-muted);
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  padding: var(--resume-space-item);
  margin: var(--resume-space-item) 0;
  background-color: ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success-bg, #d4edda)";
	if (props.$variant === "warning") return "var(--resume-color-warning-bg, #fff3cd)";
	if (props.$variant === "error") return "var(--resume-color-error-bg, #f8d7da)";
	return "var(--resume-color-muted)";
}};
  border-left: 4px solid
    ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success, #28a745)";
	if (props.$variant === "warning") return "var(--resume-color-warning, #ffc107)";
	if (props.$variant === "error") return "var(--resume-color-error, #dc3545)";
	return "var(--resume-color-accent)";
}};
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid
      ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success, #28a745)";
	if (props.$variant === "warning") return "var(--resume-color-warning, #ffc107)";
	if (props.$variant === "error") return "var(--resume-color-error, #dc3545)";
	return "var(--resume-color-accent)";
}};
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-tight) 0;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  font-size: 14px;
  font-weight: var(--resume-weight-bold);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
Tt.div`
  flex: 1;
`;
Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 4px;
`;
Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.div`
  padding: var(--resume-space-item);
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-item) 0;
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
    background-color: transparent;
    color: var(--resume-color-primary);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
Tt.h3`
  margin: 0;
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: inherit;

  @media print {
    color: var(--resume-color-primary);
  }
`;
Tt.div`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    background-color: transparent;
    border: 1px solid currentColor;
  }
`;
Tt.div`
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);

  @media print {
    color: var(--resume-color-secondary);
  }
`;
Tt.div`
  margin-top: var(--resume-space-tight);
  padding-top: var(--resume-space-tight);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--resume-size-small);

  @media print {
    border-top: 1px solid var(--resume-color-border);
    color: var(--resume-color-tertiary);
  }
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  color: white;
  font-size: 12px;
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  text-decoration: ${(props) => props.$checked && props.$strikethrough ? "line-through" : "none"};
  opacity: ${(props) => props.$checked && props.$strikethrough ? .7 : 1};
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.ol`
  margin: var(--resume-space-tight) 0;
  padding-left: 28px;
  counter-reset: list-counter;
  list-style: none;
`;
Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  counter-increment: list-counter;
  break-inside: avoid;

  &::before {
    content: counter(list-counter) '.';
    flex-shrink: 0;
    width: 24px;
    font-weight: var(--resume-weight-medium);
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 24px;
  list-style: none;
`;
Tt.li`
  position: relative;
  padding: 4px 0 4px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-bold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
Tt.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  break-inside: avoid;

  &:not(:last-child) {
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
    padding-bottom: ${(props) => props.$divider ? "6px" : "2px"};
    margin-bottom: ${(props) => props.$divider ? "6px" : "0"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
  }
`;
Tt.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
Tt.span`
  flex: 1;
  line-height: 1.4;
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 20px;
  list-style: none;
`;
Tt.li`
  position: relative;
  padding: 2px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.4;
  break-inside: avoid;
  orphans: 2;
  widows: 2;
  max-height: 4.2em; /* Enforce 2-3 line max (1.4 line-height × 3 lines) */
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: -16px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.ul`
  margin: var(--resume-space-comfortable) 0;
  padding-left: 24px;
  list-style: none;
`;
Tt.li`
  position: relative;
  padding: 6px 0; /* 6pt baseline grid */
  margin-bottom: 8px; /* 8pt baseline grid */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.6; /* 1.6 × 16px = 25.6px ≈ 26px (multiple of 6pt baseline) */
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: -20px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    line-height: inherit;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
Tt.li`
  position: relative;
  padding: 4px 0 4px 20px; /* Left padding for bullet space */
  text-indent: -20px; /* Negative indent to hang bullet outside */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    display: inline-block;
    width: 20px;
    text-indent: 0; /* Reset indent for bullet */
  }

  /* Reset text-indent for child elements */
  > * {
    text-indent: 0;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
Tt.li`
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.5;
  break-inside: avoid;

  &::before {
    content: '–'; /* En-dash (U+2013), not hyphen */
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-text)"};
    font-weight: var(--resume-weight-normal);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
Tt.li`
  display: inline-flex;
  align-items: center;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  &:not(:last-child)::after {
    content: '·'; /* Midline dot (U+00B7) */
    margin-left: 8px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:not(:last-child)::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.dl`
  margin: var(--resume-space-tight) 0;
  display: grid;
  grid-template-columns: ${(props) => props.$layout === "inline" ? "auto 1fr" : "1fr"};
  gap: ${(props) => props.$layout === "inline" ? "8px 16px" : "4px"};
`;
Tt.dt`
  font-size: var(--resume-size-body);
  color: var(--resume-color-text);
  font-weight: var(--resume-weight-semibold);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "stacked" && `
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.dd`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "inline" && `
    display: flex;
    align-items: baseline;
  `}

  ${(props) => props.$layout === "stacked" && `
    margin-left: 16px;
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin-right: 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
    }
  `}

  ${(props) => props.$layout === "inline" && `
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin: 0 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
      flex-shrink: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.time`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-secondary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 3px 10px;
  }
`;
Tt.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
Tt.time`
  font-size: ${(props) => props.$size || "var(--resume-size-small)"};
  color: ${(props) => props.$color || "var(--resume-color-tertiary)"};
  white-space: nowrap;
`;
Tt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: ${(props) => props.$opacity || .05};
  z-index: 0;
  background-image: ${(props) => {
	if (props.$pattern === "dots") return `radial-gradient(circle, var(--resume-color-primary) 1px, transparent 1px)`;
	if (props.$pattern === "grid") return `
        linear-gradient(var(--resume-color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--resume-color-border) 1px, transparent 1px)
      `;
	if (props.$pattern === "diagonal") return `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--resume-color-border) 10px,
        var(--resume-color-border) 11px
      )`;
	return "none";
}};
  background-size: ${(props) => {
	if (props.$pattern === "dots") return "20px 20px";
	if (props.$pattern === "grid") return "20px 20px";
	return "auto";
}};

  @media print {
    display: none;
  }
`;
Tt.div`
  padding: var(--resume-space-section);
  background-color: ${(props) => props.$color || "var(--resume-color-muted)"};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  margin: ${(props) => props.$margin || "var(--resume-space-section) 0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-item);
  }
`;
Tt.div`
  position: relative;
  z-index: 1;
`;
Tt.hr`
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  height: ${(props) => {
	if (props.$variant === "thick") return "3px";
	if (props.$variant === "gradient") return "2px";
	return "1px";
}};
  background: ${(props) => {
	if (props.$variant === "gradient") return `linear-gradient(
        to right,
        transparent,
        ${props.$color || "var(--resume-color-border)"},
        transparent
      )`;
	if (props.$variant === "dotted") return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 4px,
        transparent 4px,
        transparent 8px
      )`;
	if (props.$variant === "dashed") return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 12px,
        transparent 12px,
        transparent 20px
      )`;
	return props.$color || "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: ${(props) => props.$color || "var(--resume-color-border)"};
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  gap: var(--resume-space-tight);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  }

  @media print {
    &::before,
    &::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
Tt.span`
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  font-size: 16px;
`;
Tt.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-item)"};
  border: ${(props) => {
	const color = props.$color || "var(--resume-color-accent)";
	if (props.$position === "all") return `2px solid ${color}`;
	return "none";
}};
  border-left: ${(props) => {
	if (props.$position === "left" || props.$position === "all") return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
	return "none";
}};
  border-right: ${(props) => {
	if (props.$position === "right") return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
	return "none";
}};
  border-top: ${(props) => {
	if (props.$position === "top" || props.$position === "all") return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
	return "none";
}};
  border-bottom: ${(props) => {
	if (props.$position === "bottom" || props.$position === "all") return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
	return "none";
}};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border-style: solid;
  border-width: 0;

  ${(props) => {
	if (props.$corner === "top-left") return `
        top: -2px;
        left: -2px;
        border-top-width: 3px;
        border-left-width: 3px;
      `;
	if (props.$corner === "top-right") return `
        top: -2px;
        right: -2px;
        border-top-width: 3px;
        border-right-width: 3px;
      `;
	if (props.$corner === "bottom-left") return `
        bottom: -2px;
        left: -2px;
        border-bottom-width: 3px;
        border-left-width: 3px;
      `;
	if (props.$corner === "bottom-right") return `
        bottom: -2px;
        right: -2px;
        border-bottom-width: 3px;
        border-right-width: 3px;
      `;
}}

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
Tt.div`
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
Tt.div`
  @media print {
    ${(props) => {
	if (props.$type === "page") return `
          page-break-after: always;
          break-after: page;
        `;
	if (props.$type === "column") return `
          column-break-after: always;
          break-after: column;
        `;
	return `
        page-break-after: always;
        break-after: page;
      `;
}}
  }

  @media screen {
    display: none;
  }
`;
Tt.div`
  display: ${(props) => props.$hideScreen ? "none" : "block"};

  @media print {
    display: block !important;
  }

  @media screen {
    display: ${(props) => props.$hideScreen ? "none !important" : "block"};
  }
`;
Tt.div`
  @media print {
    display: none !important;
  }
`;
Tt.div`
  display: none;

  @media print {
    display: block;
    position: running(header);
    padding-bottom: var(--resume-space-xs, 0.5rem);
    border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-small, 0.875rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Tt.span`
  font-weight: 600;
  color: var(--resume-color-primary, #111827);
`;
Tt.div`
  display: none;

  @media print {
    display: block;
    position: running(footer);
    padding-top: var(--resume-space-xs, 0.5rem);
    border-top: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-xs, 0.75rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Tt.span`
  @media print {
    &::before {
      content: 'Page ';
    }
    &::after {
      content: ' of ' counter(pages);
    }
  }
`;
Tt.span`
  @media print {
    &::before {
      content: counter(page);
    }
  }
`;
Tt.span`
  font-variant-numeric: tabular-nums;
`;
Tt.div`
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
    z-index: 1000;

    /* Reserve space for unprintable area */
    margin-top: 0.25in;
  }

  @media screen {
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
  }
`;
Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--resume-size-small, 0.875rem);
`;
Tt.div`
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--resume-color-primary, #111827);
  font-size: var(--resume-size-base, 1rem);
`;
Tt.div`
  color: var(--resume-color-secondary, #6b7280);
  font-size: var(--resume-size-small, 0.875rem);
`;
Tt.div`
  @media print {
    height: 0.75in;
  }

  @media screen {
    height: 3rem;
  }
`;
Tt.div`
  position: relative;
  background: var(--resume-color-background, #ffffff);
`;
Tt.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-base, 1rem)"};
  background: var(--resume-color-background, #ffffff);

  /* Primary border */
  border: 1px solid var(--resume-color-border, #e5e7eb);

  /* Shadow emulation using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: ${(props) => props.$offset || "4px"};
    left: ${(props) => props.$offset || "4px"};
    right: -${(props) => props.$offset || "4px"};
    bottom: -${(props) => props.$offset || "4px"};
    border: 1px solid ${(props) => props.$shadowColor || "rgba(0, 0, 0, 0.08)"};
    border-radius: inherit;
    z-index: -1;

    @media print {
      /* Ensure shadow prints - use solid light gray */
      border-color: ${(props) => props.$printShadowColor || "#f0f0f0"};
    }
  }
`;
Tt.span`
  display: inline-block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.$color || props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;

  @media print {
    font-size: 9pt;
    color: ${(props) => props.$color || "#4a4a4a"};
    letter-spacing: 0.08em;
  }
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  line-height: 1.5;

  /* Ensure 4.5:1 contrast ratio minimum */
  @media screen {
    color: #4a4a4a; /* 9.29:1 contrast on white */
  }

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    gap: 6px;
  }
`;
Tt.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: '${(props) => props.$separator}';
    margin-left: 8px;
    opacity: 0.6;

    @media print {
      margin-left: 6px;
    }
  }
`;
Tt.div`
  display: block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  margin-bottom: 6px;
  line-height: 1.4;

  /* Tracked uppercase variant */
  ${(props) => props.$variant === "tracked" && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-variant: normal;
  `}

  /* Small caps variant */
  ${(props) => props.$variant === "caps" && `
    font-variant: small-caps;
    letter-spacing: 0.05em;
    text-transform: lowercase;
  `}

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    margin-bottom: 4px;

    ${(props) => props.$variant === "tracked" && `
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

    ${(props) => props.$variant === "caps" && `
      font-variant: small-caps;
      letter-spacing: 0.05em;
    `}
  }
`;
Tt.span`
  display: inline-block;
  font-size: ${(props) => {
	if (props.$size === "xs") return "8pt";
	return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.medium || "var(--resume-weight-medium, 500)"};
  /* Ensure 4.5:1 contrast minimum - #767676 provides 4.54:1 on white */
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;

  @media print {
    font-size: ${(props) => {
	if (props.$size === "xs") return "8pt";
	return "9pt";
}};
    color: #767676;
    letter-spacing: 0.08em;
  }
`;
Tt.h2`
  font-size: ${(props) => {
	if (props.$size === "sm") return "11pt";
	if (props.$size === "lg") return "13pt";
	return "12pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #1a1a1a)"};
  font-variant: small-caps;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0 0 12px 0;
  text-transform: lowercase; /* Allows font-variant to work properly */

  @media print {
    font-size: ${(props) => {
	if (props.$size === "sm") return "11pt";
	if (props.$size === "lg") return "13pt";
	return "12pt";
}};
    color: #1a1a1a;
    letter-spacing: 0.06em;
    margin: 0 0 10px 0;
    font-variant: small-caps;
    page-break-after: avoid;
  }
`;
Tt.div`
  background: ${(props) => {
	if (props.$tint === "accent") return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.06))";
	if (props.$tint === "warm") return "var(--resume-color-warm-muted, rgba(102, 51, 0, 0.05))";
	if (props.$tint === "cool") return "var(--resume-color-cool-muted, rgba(0, 51, 102, 0.05))";
	return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};

  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  padding: ${(props) => {
	if (props.$padding === "sm") return "12px";
	if (props.$padding === "lg") return "24px";
	return "16px";
}};

  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  margin: ${(props) => {
	if (props.$margin === "sm") return "8px 0";
	if (props.$margin === "lg") return "24px 0";
	if (props.$margin === "none") return "0";
	return "16px 0";
}};

  /* High text contrast for readability */
  line-height: 1.6;
  font-size: 10pt;

  /* Ensure content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Use subtle backgrounds that print well */
    background: ${(props) => {
	if (props.$tint === "accent") return "rgba(0, 102, 204, 0.05)";
	if (props.$tint === "warm") return "rgba(102, 51, 0, 0.04)";
	if (props.$tint === "cool") return "rgba(0, 51, 102, 0.04)";
	return "#f8f8f8";
}};

    /* Ensure high contrast text for printing */
    color: #000;

    /* Remove border radius for cleaner print appearance */
    border-radius: 0;

    /* Adjust spacing for print density */
    padding: ${(props) => {
	if (props.$padding === "sm") return "10px";
	if (props.$padding === "lg") return "20px";
	return "14px";
}};

    /* Prevent orphaned panels */
    page-break-inside: avoid;
  }
`;
Tt.div`
  border-left: 4px solid
    ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success, #22c55e)";
	if (props.$variant === "warning") return "var(--resume-color-warning, #f59e0b)";
	if (props.$variant === "info") return "var(--resume-color-info, #3b82f6)";
	return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  background: ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success-light, rgba(34, 197, 94, 0.08))";
	if (props.$variant === "warning") return "var(--resume-color-warning-light, rgba(245, 158, 11, 0.08))";
	if (props.$variant === "info") return "var(--resume-color-info-light, rgba(59, 130, 246, 0.08))";
	return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, rgba(0, 102, 204, 0.08))";
}};

  padding: ${(props) => props.$size === "sm" ? "12px 16px" : "16px 20px"}; /* default md */

  margin: 16px 0;
  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  /* Ensure high contrast text, no reversed text */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    /* Solid border for print clarity */
    border-left: 3pt solid
      ${(props) => {
	if (props.$variant === "success") return "#22c55e";
	if (props.$variant === "warning") return "#f59e0b";
	if (props.$variant === "info") return "#3b82f6";
	return "#0066cc";
}};

    /* Lighter background for print */
    background: ${(props) => {
	if (props.$variant === "success") return "rgba(34, 197, 94, 0.05)";
	if (props.$variant === "warning") return "rgba(245, 158, 11, 0.05)";
	if (props.$variant === "info") return "rgba(59, 130, 246, 0.05)";
	return "rgba(0, 102, 204, 0.05)";
}};

    /* Remove border radius */
    border-radius: 0;

    /* Ensure black text for maximum contrast */
    color: #000;

    /* Prevent splitting across pages */
    page-break-inside: avoid;
  }
`;
Tt.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  /* Icon styling */
  .callout-icon {
    font-size: 16pt;
    line-height: 1;
  }
`;
Tt.div`
  /* Bold, larger title for emphasis (as per design constraints) */
  font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
  font-weight: 700;
  color: ${(props) => {
	if (props.$variant === "success") return "var(--resume-color-success-dark, #16a34a)";
	if (props.$variant === "warning") return "var(--resume-color-warning-dark, #d97706)";
	if (props.$variant === "info") return "var(--resume-color-info-dark, #2563eb)";
	return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    /* Maintain weight and bump size slightly for print */
    font-weight: 700;
    font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
    color: #000;
  }
`;
Tt.div`
  font-size: 10pt;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    font-size: 10pt;
    line-height: 1.5;
  }
`;
Tt.div`
  /* 1pt stroke as specified */
  border: 1px solid
    ${(props) => {
	if (props.$variant === "accent") return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #cce5ff)";
	if (props.$variant === "muted") return props.theme?.colors?.border || "var(--resume-color-border, #e5e5e5)";
	return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #d4d4d4)";
}};

  /* Rounded corners for softness */
  border-radius: ${(props) => {
	if (props.$rounded === "sm") return "4px";
	if (props.$rounded === "lg") return "12px";
	return props.theme?.radius?.md || "var(--resume-radius-md, 8px)";
}};

  /* No shadows - clean outline only */
  box-shadow: none;

  /* Padding options */
  padding: ${(props) => {
	if (props.$padding === "sm") return "12px";
	if (props.$padding === "lg") return "24px";
	return "16px";
}};

  margin: ${(props) => {
	if (props.$margin === "sm") return "8px 0";
	if (props.$margin === "lg") return "24px 0";
	if (props.$margin === "none") return "0";
	return "16px 0";
}};

  /* Optional subtle background */
  background: ${(props) => {
	if (props.$background === "accent") return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.03))";
	if (props.$background === "muted") return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.02))";
	return "transparent";
}};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: 1pt solid
      ${(props) => {
	if (props.$variant === "accent") return "#b3d9ff";
	if (props.$variant === "muted") return "#d4d4d4";
	return "#c0c0c0";
}};

    /* Remove border radius for print (cleaner appearance) */
    border-radius: 0;

    /* Remove background fills for print */
    background: transparent;

    /* Ensure high contrast text */
    color: #000;

    /* Adjust padding for print density */
    padding: ${(props) => {
	if (props.$padding === "sm") return "10px";
	if (props.$padding === "lg") return "20px";
	return "14px";
}};

    /* Prevent splitting card across pages */
    page-break-inside: avoid;

    /* Ensure no page edge collision */
    margin-left: 0;
    margin-right: 0;
  }
`;
Tt.div`
  /* Light frame - subtle border */
  border: 1px solid
    ${(props) => {
	if (props.$variant === "accent") return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #e0e0e0)";
	if (props.$variant === "minimal") return "transparent";
	return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #e5e5e5)";
}};

  /* Optional background tint */
  background: ${(props) => {
	if (props.$variant === "accent") return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.02))";
	if (props.$variant === "tinted") return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.01))";
	return "transparent";
}};

  /* Consistent padding to prevent edge collision */
  padding: ${(props) => {
	if (props.$padding === "sm") return "12px 16px";
	if (props.$padding === "lg") return "20px 24px";
	return "16px 20px";
}};

  /* Spacing between role blocks */
  margin: ${(props) => {
	if (props.$spacing === "sm") return "12px 0";
	if (props.$spacing === "lg") return "24px 0";
	if (props.$spacing === "none") return "0";
	return "16px 0";
}};

  /* Subtle rounding */
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for nested elements */
  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: ${(props) => {
	if (props.$variant === "minimal") return "none";
	if (props.$variant === "accent") return "0.5pt solid #d0d0d0";
	return "0.5pt solid #e0e0e0";
}};

    /* Remove background for clean print */
    background: transparent;

    /* Remove border radius for print */
    border-radius: 0;

    /* Adjust padding for print density */
    padding: ${(props) => {
	if (props.$padding === "sm") return "10px 12px";
	if (props.$padding === "lg") return "16px 20px";
	return "12px 16px";
}};

    /* Prevent page edge collision - ensure margins */
    margin-left: 0;
    margin-right: 0;

    /* Prevent splitting role blocks across pages */
    page-break-inside: avoid;

    /* Add small gap after each block for readability */
    margin-bottom: ${(props) => {
	if (props.$spacing === "sm") return "10px";
	if (props.$spacing === "lg") return "20px";
	if (props.$spacing === "none") return "0";
	return "14px";
}};

    /* Ensure high contrast text */
    color: #000;

    /* Optimize nested element spacing for print */
    h3,
    h4 {
      margin-bottom: 6px;
    }

    ul,
    ol {
      margin: 6px 0;
    }

    li {
      margin: 3px 0;
    }
  }
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "4px 0" : "6px 0"};
  line-height: ${(props) => props.theme?.typography?.lineHeight || "var(--resume-line-height, 1.5)"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 3pt 0;
  }
`;
Tt.span`
  display: inline-block;
  font-size: ${(props) => {
	if (props.$size === "small") return "8.5pt";
	if (props.$size === "large") return "10.5pt";
	return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #444444)"};
  white-space: nowrap;

  /* Preserve baseline grid */
  vertical-align: baseline;

  @media print {
    color: #444444;
    font-size: ${(props) => {
	if (props.$size === "small") return "8pt";
	if (props.$size === "large") return "10pt";
	return "9pt";
}};
  }
`;
Tt.span`
  display: inline-block;
  font-size: ${(props) => {
	if (props.$size === "small") return "8.5pt";
	if (props.$size === "large") return "10.5pt";
	return "9.5pt";
}};
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #cccccc)"};
  user-select: none;
  vertical-align: baseline;

  @media print {
    color: #cccccc;
  }
`;
Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "6px 0" : "8px 0"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 4pt 0;
  }
`;
Tt.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
	if (props.$size === "small") return "3px 10px";
	if (props.$size === "large") return "7px 16px";
	return "5px 12px";
}};
  border: ${(props) => props.$strokeWidth || "0.5pt"} solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #666666)"};
  border-radius: ${(props) => props.$rounded ? "999px" : props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
	if (props.$size === "small") return "8.5pt";
	if (props.$size === "large") return "10.5pt";
	return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000000)"};
  background: transparent;
  white-space: nowrap;
  line-height: 1.2;

  /* Prevent scalloping on low-DPI displays */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    /* Ensure minimum stroke width for print clarity */
    border-width: ${(props) => {
	return props.$strokeWidth || "0.5pt";
}};
    border-color: #666666;
    color: #000000;
    padding: ${(props) => {
	if (props.$size === "small") return "2pt 8pt";
	if (props.$size === "large") return "5pt 12pt";
	return "3pt 10pt";
}};
    font-size: ${(props) => {
	if (props.$size === "small") return "8pt";
	if (props.$size === "large") return "10pt";
	return "9pt";
}};

    /* Force exact colors for print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
//#endregion
//#region src/Resume.jsx
var Layout = Tt.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 32px;
  background: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1f2937;
  line-height: 1.7;
  font-size: 15px;

  @media print {
    padding: 24px;
  }
`;
var Header = Tt.header`
  margin-bottom: 40px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 32px;
`;
var Name = Tt.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111827;
  letter-spacing: -0.5px;
`;
var Label = Tt.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 16px;
`;
var ContactWrapper = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  color: #6b7280;
`;
var SummarySection = Tt(Section)`
  margin-bottom: 40px;
`;
var SummaryText = Tt.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #374151;
`;
var MainSection = Tt(Section)`
  margin-bottom: 40px;
`;
var MainSectionTitle = Tt(SectionTitle)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #6b7280;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
var WorkItem = Tt.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
var WorkHeader = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`;
var WorkTitle = Tt.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #111827;
`;
var WorkMeta = Tt.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
`;
var WorkCompany = Tt.div`
  font-size: 15px;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 8px;
`;
var WorkDescription = Tt.p`
  font-size: 15px;
  line-height: 1.7;
  margin: 12px 0;
  color: #374151;
`;
var WorkHighlights = Tt.ul`
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style: none;

  li {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.6;
    color: #374151;
    position: relative;
    padding-left: 18px;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: 600;
    }
  }
`;
var SkillsGrid = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
`;
var SkillItem = Tt.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var SkillName = Tt.h4`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var SkillCodeBlock = Tt.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  background: #f9fafb;
  padding: 12px;
  border-radius: 4px;
  border-left: 3px solid #2563eb;
  line-height: 1.6;
  color: #4b5563;
`;
var SimpleList = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;
var SimpleItem = Tt.div`
  font-size: 15px;
  line-height: 1.6;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;

  strong {
    font-weight: 600;
    color: #111827;
  }
`;
function Resume({ resume }) {
	const { basics = {}, work = [], education = [], skills = [], projects = [], volunteer = [], awards = [], certificates = [], publications = [], languages = [], interests = [], references = [] } = resume;
	return /* @__PURE__ */ jsxs(Layout, { children: [
		/* @__PURE__ */ jsxs(Header, { children: [
			basics.name && /* @__PURE__ */ jsx(Name, { children: basics.name }),
			basics.label && /* @__PURE__ */ jsx(Label, { children: basics.label }),
			/* @__PURE__ */ jsx(ContactWrapper, { children: /* @__PURE__ */ jsx(ContactInfo, { basics }) })
		] }),
		basics.summary && /* @__PURE__ */ jsx(SummarySection, { children: /* @__PURE__ */ jsx(SummaryText, { children: basics.summary }) }),
		work.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Experience" }), work.map((job, index) => /* @__PURE__ */ jsxs(WorkItem, { children: [
			/* @__PURE__ */ jsxs(WorkHeader, { children: [/* @__PURE__ */ jsx(WorkTitle, { children: job.position || job.name }), /* @__PURE__ */ jsx(WorkMeta, { children: /* @__PURE__ */ jsx(DateRange, {
				startDate: job.startDate,
				endDate: job.endDate
			}) })] }),
			job.name && /* @__PURE__ */ jsx(WorkCompany, { children: job.name }),
			job.summary && /* @__PURE__ */ jsx(WorkDescription, { children: job.summary }),
			job.highlights && job.highlights.length > 0 && /* @__PURE__ */ jsx(WorkHighlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ jsx("li", { children: highlight }, i)) })
		] }, index))] }),
		skills.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Skills" }), /* @__PURE__ */ jsx(SkillsGrid, { children: skills.map((skill, index) => /* @__PURE__ */ jsxs(SkillItem, { children: [/* @__PURE__ */ jsx(SkillName, { children: skill.name }), /* @__PURE__ */ jsx(SkillCodeBlock, { children: skill.keywords?.join(", ") })] }, index)) })] }),
		projects.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Projects" }), projects.map((project, index) => /* @__PURE__ */ jsxs(WorkItem, { children: [
			/* @__PURE__ */ jsxs(WorkHeader, { children: [/* @__PURE__ */ jsx(WorkTitle, { children: project.url ? /* @__PURE__ */ jsx(Link$6, {
				href: safeUrl(project.url),
				children: project.name
			}) : project.name }), (project.startDate || project.endDate) && /* @__PURE__ */ jsx(WorkMeta, { children: /* @__PURE__ */ jsx(DateRange, {
				startDate: project.startDate,
				endDate: project.endDate
			}) })] }),
			project.description && /* @__PURE__ */ jsx(WorkDescription, { children: project.description }),
			project.highlights && project.highlights.length > 0 && /* @__PURE__ */ jsx(WorkHighlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ jsx("li", { children: highlight }, i)) }),
			project.keywords && project.keywords.length > 0 && /* @__PURE__ */ jsx(BadgeList, {
				style: { marginTop: "14px" },
				children: project.keywords.map((kw, ki) => /* @__PURE__ */ jsx(Badge$3, {
					variant: "accent",
					style: { fontSize: "8pt" },
					children: kw
				}, ki))
			})
		] }, index))] }),
		education.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Education" }), education.map((edu, index) => /* @__PURE__ */ jsxs(WorkItem, { children: [
			/* @__PURE__ */ jsxs(WorkHeader, { children: [/* @__PURE__ */ jsx(WorkTitle, { children: edu.institution }), /* @__PURE__ */ jsx(WorkMeta, { children: /* @__PURE__ */ jsx(DateRange, {
				startDate: edu.startDate,
				endDate: edu.endDate
			}) })] }),
			edu.studyType && edu.area && /* @__PURE__ */ jsxs(WorkCompany, { children: [
				edu.studyType,
				" in ",
				edu.area
			] }),
			edu.score && /* @__PURE__ */ jsxs(WorkDescription, { children: ["GPA: ", edu.score] })
		] }, index))] }),
		volunteer.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Volunteer" }), volunteer.map((vol, index) => /* @__PURE__ */ jsxs(WorkItem, { children: [
			/* @__PURE__ */ jsxs(WorkHeader, { children: [/* @__PURE__ */ jsx(WorkTitle, { children: vol.position }), /* @__PURE__ */ jsx(WorkMeta, { children: /* @__PURE__ */ jsx(DateRange, {
				startDate: vol.startDate,
				endDate: vol.endDate
			}) })] }),
			/* @__PURE__ */ jsx(WorkCompany, { children: vol.organization }),
			vol.summary && /* @__PURE__ */ jsx(WorkDescription, { children: vol.summary }),
			vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ jsx(WorkHighlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ jsx("li", { children: highlight }, i)) })
		] }, index))] }),
		awards.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Awards" }), /* @__PURE__ */ jsx(SimpleList, { children: awards.map((award, index) => /* @__PURE__ */ jsxs(SimpleItem, { children: [
			/* @__PURE__ */ jsx("strong", { children: award.title }),
			award.awarder && ` — ${award.awarder}`,
			award.date && /* @__PURE__ */ jsx("div", {
				style: {
					fontSize: "13px",
					color: "#6b7280",
					marginTop: "4px"
				},
				children: award.date
			})
		] }, index)) })] }),
		certificates.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Certificates" }), /* @__PURE__ */ jsx(SimpleList, { children: certificates.map((cert, index) => /* @__PURE__ */ jsxs(SimpleItem, { children: [
			/* @__PURE__ */ jsx("strong", { children: cert.url ? /* @__PURE__ */ jsx(Link$6, {
				href: safeUrl(cert.url),
				children: cert.name
			}) : cert.name }),
			cert.issuer && ` — ${cert.issuer}`,
			cert.date && /* @__PURE__ */ jsx("div", {
				style: {
					fontSize: "13px",
					color: "#6b7280",
					marginTop: "4px"
				},
				children: cert.date
			})
		] }, index)) })] }),
		publications.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Publications" }), /* @__PURE__ */ jsx(SimpleList, { children: publications.map((pub, index) => /* @__PURE__ */ jsxs(SimpleItem, { children: [
			/* @__PURE__ */ jsx("strong", { children: pub.name }),
			pub.publisher && ` — ${pub.publisher}`,
			pub.releaseDate && /* @__PURE__ */ jsx("div", {
				style: {
					fontSize: "13px",
					color: "#6b7280",
					marginTop: "4px"
				},
				children: pub.releaseDate
			})
		] }, index)) })] }),
		languages.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Languages" }), /* @__PURE__ */ jsx(SimpleList, { children: languages.map((lang, index) => /* @__PURE__ */ jsxs(SimpleItem, { children: [/* @__PURE__ */ jsx("strong", { children: lang.language }), lang.fluency && ` — ${lang.fluency}`] }, index)) })] }),
		interests.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "Interests" }), /* @__PURE__ */ jsx(SimpleList, { children: interests.map((interest, index) => /* @__PURE__ */ jsx(SimpleItem, { children: interest.name }, index)) })] }),
		references.length > 0 && /* @__PURE__ */ jsxs(MainSection, { children: [/* @__PURE__ */ jsx(MainSectionTitle, { children: "References" }), references.map((ref, index) => /* @__PURE__ */ jsxs(WorkItem, { children: [/* @__PURE__ */ jsx(WorkTitle, { children: ref.name }), ref.reference && /* @__PURE__ */ jsx(WorkDescription, { children: ref.reference })] }, index))] })
	] });
}
//#endregion
//#region src/index.jsx
function render(resume) {
	return renderResumeDocument(/* @__PURE__ */ jsx(Resume, { resume }), {
		fonts: ["Inter:wght@400;500;600"],
		headAfterStyles: `<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.5in;
      }
    }
  </style>`,
		lang: "en",
		dir: "ltr",
		title: `${resume.basics?.name || "Resume"} - Resume`,
		includeTokensCss: false
	});
}
//#endregion
export { render };
