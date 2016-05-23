'use strict';

var UDF = 'undefined';


//ELEMENT_NODE:1
//ATTRIBUTE_NODE:2
//TEXT_NODE:3
//CDATA_SECTION_NODE:4
//ENTITY_REFERENCE_NODE:5
//ENTITY_NODE:6
//PROCESSING_INSTRUCTION_NODE:7
//COMMENT_NODE:8
//DOCUMENT_NODE:9
//DOCUMENT_TYPE_NODE:10
//DOCUMENT_FRAGMENT_NODE:11
//NOTATION_NODE:12
//
//DOCUMENT_POSITION_DISCONNECTED:1
//DOCUMENT_POSITION_PRECEDING:2
//DOCUMENT_POSITION_FOLLOWING:4
//DOCUMENT_POSITION_CONTAINS:8
//DOCUMENT_POSITION_CONTAINED_BY:16
//DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:32




/**
 * 测试 arguments
 * @returns {boolean}
 */
var testArguments = function (args) {
    /* istanbul ignore next */
    return args !== undefined;
};


/**
 * 判断对象类型
 * @type {Function}
 * @param any {*} 待判断对象
 * @returns {string}
 */
var typeis = module.exports = function (any) {
    if (typeof any === UDF) {
        return UDF;
    } else if (any && any === any.window) {
        return 'window';
    }
    //else if (any && any === any.global) {
    //    return 'global';
    //}
    else if (typeof document !== UDF && any === document) {
        return 'document';
    } else if (any === null) {
        return 'null';
    } else if (any !== any) {
        return 'nan';
    }

    var ret = Object.prototype.toString.call(any).slice(8, -1).toLowerCase();

    // android 5.0+ element 对象的 toString 不为 [Object HTMLElement...]
    if (any.nodeType === 1 && any.nodeName) {
        return 'element';
    }

    try {
        // @fuckie arguments 返回的是 object
        /* istanbul ignore next */
        if (ret === 'object' && 'callee' in any && testArguments(any)) {
            return 'arguments';
        }
    } catch (err) {
        // ignore
    }

    return ret;
};


/**
 * 创建出口
 * @param type
 * @returns {Function}
 */
var makeExports = function (type) {
    return function (any) {
        return typeis(any) === type;
    };
};


/**
 * 判断是否 string
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.String = makeExports('string');

/**
 * 判断是否为 number
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Number = makeExports('number');

/**
 * 判断是否为 array
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Array = makeExports('array');

/**
 * 判断是否为 object
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Object = makeExports('object');

/**
 * 判断是否为 function
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Function = makeExports('function');

/**
 * 判断是否为 null
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Null = makeExports('null');

/**
 * 判断是否为 undefined
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Undefined = makeExports('undefined');

/**
 * 判断是否为 null 或 undefined
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.None = function (any) {
    return typeis.Null(any) || typeis.Undefined(any);
};

/**
 * 判断是否为 regexp
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Regexp = typeis.RegExp = makeExports('regexp');

/**
 * 判断是否为 boolean
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Boolean = makeExports('boolean');

///**
// * 判断是否为 global
// * @param any {*} 待判断对象
// * @type {Function}
// */
//typeis.Global = makeExports('global');

/**
 * 判断是否为 window
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Window = makeExports('window');

/**
 * 判断是否为 document
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Document = makeExports('document');

/**
 * 判断是否为 element
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Element = makeExports('element');

/**
 * 判断是否为 nan
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Nan = typeis.NaN = makeExports('nan');

/**
 * 判断是否为 arguments
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Arguments = makeExports('arguments');

/**
 * 判断是否为 date
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Date = makeExports('date');

/**
 * 判断是否为 error
 * @param any {*} 待判断对象
 * @type {Function}
 */
typeis.Error = makeExports('error');
