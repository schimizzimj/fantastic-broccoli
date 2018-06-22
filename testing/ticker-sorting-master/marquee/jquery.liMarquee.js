/*
* jQuery liMarquee v 4.6
*
* Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
* http://masscode.ru/index.php/k2/item/44-limarquee
* Free to use
*
* Last Update 20.11.2014
 */
 (function($) {
     'use strict';
     var methods = {
         init: function(options) {
             var p = {
                 width: 'auto',
                 height: 'auto',
                 direction: 'left',
                 scrollDelay: 85,
                 scrollAmount: 6,
                 circular: false,
                 dragAndDrop: true,
                 hoverStop: true,
                 scrollStop: true,
                 startShow: false,
                 xml: false,
                 touchEvent: true,
                 stopOutScreen: true,
                 create: function() {},
                 moveStart: function() {},
                 moveStop: function() {},
                 drag: function() {},
                 dragStart: function() {},
                 dragStop: function() {},
                 wayEnd: function() {},
                 removeContentFadeDuration: 300
             };
             if (options) {
                 $['extend'](p, options)
             };
             return this['each'](function() {
                 var _0x2f8ex5 = $(this)['addClass']('mWrap');
                 var _0x2f8ex6 = $('*')['index']($(this));
                 _0x2f8ex5['data']()['mElIndex'] = _0x2f8ex6;
                 var _0x2f8ex7 = function(_0x2f8ex8, _0x2f8ex9) {
                     var _0x2f8exa = _0x2f8ex8['position']();
                     var _0x2f8exb = _0x2f8ex9 || $(document);
                     var _0x2f8exc = (_0x2f8exb['outerWidth']() - (_0x2f8ex8['position']()['left'] + _0x2f8ex8['outerWidth']()));
                     var _0x2f8exd = (_0x2f8exb['outerHeight']() - (_0x2f8ex8['position']()['top'] + _0x2f8ex8['outerHeight']()));
                     var _0x2f8exe = {
                         right: _0x2f8exc,
                         bottom: _0x2f8exd
                     };
                     $['extend'](_0x2f8exe, _0x2f8exa);
                     return _0x2f8exe
                 };
                 _0x2f8ex5['data']()['style'] = _0x2f8ex5['attr']('style');
                 $['extend'](p, _0x2f8ex5['data']());
                 $['extend'](_0x2f8ex5['data'](), p);
                 if (!$('.mMove', _0x2f8ex5)['length']) {
                     _0x2f8ex5['wrapInner']('<div class="mMove"></div>')
                 };
                 var _0x2f8exf = $('.mMove', _0x2f8ex5);
                 _0x2f8ex5['css']({
                     position: 'relative',
                     overflow: 'hidden',
                     maxWidth: '100%',
                     height: _0x2f8ex5['data']()['height'],
                     width: _0x2f8ex5['data']()['width']
                 });
                 if (_0x2f8ex5['data']()['scrollDelay'] <= 0) {
                     _0x2f8ex5['data']()['scrollDelay'] = 85
                 };
                 _0x2f8ex5['data']()['outerSizeFunc'] = function(_0x2f8ex8) {
                     if (_0x2f8ex5['data']()['direction'] === 'top' || _0x2f8ex5['data']()['direction'] === 'bottom') {
                         return _0x2f8ex8['outerHeight']()
                     } else {
                         return _0x2f8ex8['outerWidth']()
                     }
                 };
                 _0x2f8exf['data']()['style'] = _0x2f8exf['attr']('style');
                 if ((!_0x2f8ex5['data']()['updateCont'])) {
                     _0x2f8exf['css']({
                         position: 'absolute',
                         left: 'auto',
                         right: 'auto',
                         top: 'auto',
                         bottom: 'auto',
                         float: 'left'
                     })
                 };
                 _0x2f8ex5['data']()['mMove'] = _0x2f8exf;
                 var $0 = function() {
                     _0x2f8ex5['data']()['clickEventFlag'] = true;
                     if (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) > 0) {
                         var $1 = $('.mItem', _0x2f8ex5);
                         $1['each'](function() {
                             $(this)['data']()['style'] = $(this)['attr']('style');
                             $(this)['css']({
                                 display: 'inline',
                                 zoom: 1
                             })
                         });
                         var $2 = function($3, $1) {
                             $1['css']({
                                 paddingLeft: 0,
                                 paddingRight: 0,
                                 paddingTop: 0,
                                 paddingBottom: 0
                             });
                             if ($1['length'] && !_0x2f8ex5['data']()['circular']) {
                                 var $4 = {};
                                 var $5 = {};
                                 $4['padding-' + $3] = _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5);
                                 $5['padding-' + $3] = 0;
                                 $1['css']($4);
                                 $1['eq'](0)['css']($5)
                             }
                         };
                         _0x2f8ex5['data']()['splittingString'] = $2;
                         var $6 = $('<div>')['addClass']('cloneContent')['html'](_0x2f8exf['html']());
                         if (_0x2f8ex5['data']()['direction'] === 'left' || _0x2f8ex5['data']()['direction'] === 'right') {
                             _0x2f8exf['css']({
                                 whiteSpace: 'nowrap'
                             });
                             _0x2f8ex5['data']()['splittingString']('left', $1);
                             _0x2f8ex5['css']({
                                 minHeight: _0x2f8exf['outerHeight']()
                             });
                             $6['css']({
                                 display: 'inline-block'
                             });
                             _0x2f8ex5['data']()['axis'] = 'hor'
                         } else {
                             _0x2f8exf['css']({
                                 whiteSpace: 'normal'
                             });
                             $1['css']({
                                 display: 'block'
                             });
                             _0x2f8ex5['data']()['splittingString']('top', $1);
                             if (_0x2f8ex5['outerHeight']() === 0) {
                                 alert('Set Height Parametr for Plugin liMarquee')
                             };
                             $6['css']({
                                 display: 'block'
                             });
                             _0x2f8ex5['data']()['axis'] = 'vert'
                         };
                         var $7 = false || document['documentMode'];
                         if ($7) {
                             _0x2f8ex5['add'](_0x2f8ex5['find']('*'))['attr']('unselectable', 'on')
                         };
                         var $8 = 'mousemove.' + _0x2f8ex5['data']()['mElIndex'];
                         var $9 = 'mousedown.' + _0x2f8ex5['data']()['mElIndex'];
                         var $a = 'mouseup.' + _0x2f8ex5['data']()['mElIndex'];
                         var $b = 'click.' + _0x2f8ex5['data']()['mElIndex'];
                         _0x2f8ex5['data']({
                             touchScreen: false,
                             teleport: false,
                             dragging: false,
                             pause: false
                         });
                         if ('ontouchstart' in window) {
                             $8 = 'touchmove.' + _0x2f8ex5['data']()['mElIndex'];
                             $9 = 'touchstart.' + _0x2f8ex5['data']()['mElIndex'];
                             $a = 'touchend.' + _0x2f8ex5['data']()['mElIndex'];
                             _0x2f8ex5['data']()['touchScreen'] = true;
                             if ($(window)['width']() < 1000) {
                                 _0x2f8ex5['data']()['hoverStop'] = false
                             }
                         };
                         _0x2f8ex5['data']({
                             moveEvent: $8,
                             mousedownEvent: $9,
                             mouseupEvent: $a,
                             clickEvent: $b
                         });
                         var $c = function(_0x2f8exf) {
                             if (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) !== 0) {
                                 if (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) < _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5) && _0x2f8ex5['data']()['circular']) {
                                     $6['clone']()['appendTo'](_0x2f8exf);
                                     _0x2f8ex5['data']()['cloneContent'](_0x2f8exf)
                                 }
                             } else {
                                 console['log']('The string is empty or contains invalid style')
                             }
                         };
                         _0x2f8ex5['data']()['cloneContent'] = $c;
                         _0x2f8ex5['data']()['cloneContent'](_0x2f8exf);
                         var $d = function($e, $f) {
                             if (!_0x2f8ex5['data']()['pause']) {
                                 if ($e === undefined) {
                                     $e = _0x2f8ex5['data']()['startPos']
                                 };
                                 if ($f === undefined) {
                                     $f = _0x2f8ex5['data']()['endPos']
                                 };
                                 if ($f !== 0 && $f !== -0) {
                                     var methods0 = ($f - $e);
                                     if (methods0 < 0) {
                                         methods0 = methods0 * -1
                                     };
                                     var methods1 = (methods0 * _0x2f8ex5['data']()['scrollDelay']) / _0x2f8ex5['data']()['scrollAmount'];
                                     var methods2 = {};
                                     var methods3 = {};
                                     methods2 = {
                                         left: 'auto',
                                         right: 'auto',
                                         top: 'auto',
                                         bottom: 'auto'
                                     };
                                     methods3 = {
                                         left: 'auto',
                                         right: 'auto',
                                         top: 'auto',
                                         bottom: 'auto'
                                     };
                                     methods2[_0x2f8ex5['data']()['direction']] = $e;
                                     methods3[_0x2f8ex5['data']()['direction']] = $f;
                                     _0x2f8exf['css'](methods2);
                                     _0x2f8ex5['addClass']('mIni');
                                     _0x2f8ex5['data']()['stopped'] = false;
                                     if (_0x2f8ex5['data']()['moveStart'] !== undefined) {
                                         _0x2f8ex5['data']()['moveStart']()
                                     };
                                     _0x2f8exf['stop'](true)['animate'](methods3, methods1, 'linear', function() {
                                         if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                             _0x2f8ex5['data']()['moveStop']()
                                         };
                                         if (_0x2f8ex5['data']()['wayEnd'] !== undefined) {
                                             _0x2f8ex5['data']()['wayEnd']()
                                         };
                                         _0x2f8ex5['data']()['teleport'] = true;
                                         $d()
                                     })
                                 }
                             }
                         };
                         _0x2f8ex5['data']()['anim'] = $d;
                         var methods4 = function() {
                             var methods5 = _0x2f8exf['clone']()['addClass']('clone')['css']({
                                 position: 'absolute',
                                 width: '100%',
                                 height: '100%',
                                 opacity: 0
                             });
                             if (_0x2f8ex5['data']()['direction'] === 'top' || _0x2f8ex5['data']()['direction'] === 'bottom') {
                                 methods5['css']({
                                     left: 0
                                 })
                             } else {
                                 methods5['css']({
                                     top: 0
                                 })
                             };
                             var methods6 = {};
                             var methods7 = {};
                             methods6[_0x2f8ex5['data']()['direction']] = '-100%';
                             methods7[_0x2f8ex5['data']()['direction']] = '100%';
                             var methods8 = methods5['clone']()['addClass']('cloneBefore')['css'](methods6)['appendTo'](_0x2f8exf);
                             var methods9 = methods5['clone']()['addClass']('cloneAfter')['css'](methods7)['appendTo'](_0x2f8exf);
                             if (_0x2f8ex5['data']()['circular']) {
                                 methods8['add'](methods9)['css']({
                                     opacity: 1
                                 })
                             }
                         };
                         if (_0x2f8ex5['data']()['circular']) {
                             methods4()
                         };
                         if (_0x2f8ex5['data']()['create'] !== undefined) {
                             _0x2f8ex5['data']()['create']()
                         };
                         var methodsa = function() {
                             return _0x2f8ex7(_0x2f8exf, _0x2f8ex5)[_0x2f8ex5['data']()['direction']]
                         };
                         _0x2f8ex5['data']()['nowPos'] = methodsa;
                         var methodsb = function(methodsc) {
                             var methodsd = methodsc;
                             if (_0x2f8ex5['data']()['touchScreen']) {
                                 if (methodsc['originalEvent']['targetTouches']['length'] === 1) {
                                     methodsd = methodsc['originalEvent']['targetTouches'][0]
                                 }
                             };
                             var methodse = {
                                 left: methodsd['pageX'],
                                 top: methodsd['pageY'],
                                 right: ($(window)['width']() - methodsd['pageX']),
                                 bottom: ($(window)['height']() - methodsd['pageY'])
                             };
                             $['extend'](methodsd, methodse);
                             return methodsd
                         };
                         if (_0x2f8ex5['data']()['hoverStop']) {
                             _0x2f8ex5['on']('mouseenter.' + _0x2f8ex5['data']()['mElIndex'], function() {
                                 _0x2f8ex5['off']('mouseleave.' + _0x2f8ex5['data']()['mElIndex']);
                                 if (_0x2f8ex5['data']()['dragAndDrop']) {
                                     $('html')['addClass']('grab')
                                 };
                                 if (!_0x2f8ex5['data']()['stopped']) {
                                     _0x2f8exf['stop'](true);
                                     _0x2f8ex5['data']()['stopped'] = true;
                                     if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                         _0x2f8ex5['data']()['moveStop']()
                                     }
                                 };
                                 _0x2f8ex5['on']('mouseleave.' + _0x2f8ex5['data']()['mElIndex'], function() {
                                     $(document)['off']($8);
                                     $('html')['removeClass']('grab');
                                     $('html')['removeClass']('grabbing');
                                     $d(_0x2f8ex5['data']()['nowPos']())
                                 })
                             })
                         };
                         if (!_0x2f8ex5['data']()['touchScreen'] && _0x2f8ex5['data']()['dragAndDrop'] || _0x2f8ex5['data']()['touchScreen'] && _0x2f8ex5['data']()['touchEvent']) {
                             _0x2f8ex5['on']($9, function(methodsc) {
                                 $(document)['off']($8);
                                 $(document)['off']($a);
                                 _0x2f8ex5['off']('mouseleave.' + _0x2f8ex5['data']()['mElIndex']);
                                 $('html')['addClass']('grabbing');
                                 if (!_0x2f8ex5['data']()['stopped']) {
                                     _0x2f8exf['stop'](true);
                                     _0x2f8ex5['data']()['stopped'] = true;
                                     if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                         _0x2f8ex5['data']()['moveStop']()
                                     }
                                 };
                                 var methodsf = methodsb(methodsc)[_0x2f8ex5['data']()['direction']];
                                 var options0 = methodsb(methodsc)['top'];
                                 var options1 = methodsb(methodsc)['left'];
                                 var options2 = 0;
                                 var options3 = 0;
                                 var options4 = 1;
                                 $(document)['on']($8, function(methodsc) {
                                     _0x2f8ex5['data']()['clickEventFlag'] = false;
                                     _0x2f8ex5['off']('mouseleave.' + _0x2f8ex5['data']()['mElIndex']);
                                     $('html')['addClass']('grabbing');
                                     if (!_0x2f8ex5['data']()['dragging']) {
                                         if (_0x2f8ex5['data']()['dragStart'] !== undefined) {
                                             _0x2f8ex5['data']()['dragStart']()
                                         };
                                         _0x2f8ex5['data']()['dragging'] = true
                                     };
                                     var options5 = _0x2f8ex5['data']()['nowPos']();
                                     if (!_0x2f8ex5['data']()['stopped']) {
                                         _0x2f8exf['stop'](true);
                                         _0x2f8ex5['data']()['stopped'] = true
                                     };
                                     var options6 = methodsb(methodsc)[_0x2f8ex5['data']()['direction']];
                                     var options7 = function() {
                                         if (options6 > methodsf) {
                                             options4 = 1
                                         };
                                         if (options6 < methodsf) {
                                             options4 = -1
                                         };
                                         var options8 = (methodsf - options6);
                                         methodsf = options6;
                                         var methods6 = {};
                                         methods6[_0x2f8ex5['data']()['direction']] = '-=' + options8;
                                         if (_0x2f8ex5['data']()['circular']) {
                                             if (options5 <= _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) && !_0x2f8ex5['data']()['teleport']) {
                                                 _0x2f8ex5['data']()['teleport'] = true
                                             };
                                             if (options5 <= (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5) - _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf)) && options4 < 0 && _0x2f8ex5['data']()['teleport']) {
                                                 if (_0x2f8ex5['data']()['wayEnd'] !== undefined) {
                                                     _0x2f8ex5['data']()['wayEnd']()
                                                 };
                                                 methods6[_0x2f8ex5['data']()['direction']] = '+=' + _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf)
                                             };
                                             if (options5 >= 0 && options4 > 0 && _0x2f8ex5['data']()['teleport']) {
                                                 if (_0x2f8ex5['data']()['wayEnd'] !== undefined) {
                                                     _0x2f8ex5['data']()['wayEnd']()
                                                 };
                                                 methods6[_0x2f8ex5['data']()['direction']] = '-=' + _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf)
                                             }
                                         } else {
                                             if (options5 <= -_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) && options4 < 0) {
                                                 if (_0x2f8ex5['data']()['wayEnd'] !== undefined) {
                                                     _0x2f8ex5['data']()['wayEnd']()
                                                 };
                                                 methods6[_0x2f8ex5['data']()['direction']] = '+=' + (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) + _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5))
                                             };
                                             if (options5 >= _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5) && options4 > 0) {
                                                 if (_0x2f8ex5['data']()['wayEnd'] !== undefined) {
                                                     _0x2f8ex5['data']()['wayEnd']()
                                                 };
                                                 methods6[_0x2f8ex5['data']()['direction']] = '-=' + (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) + _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5))
                                             }
                                         };
                                         if (_0x2f8ex5['data']()['drag'] !== undefined) {
                                             _0x2f8ex5['data']()['drag']()
                                         };
                                         _0x2f8exf['css'](methods6);
                                         if (_0x2f8ex5['data']()['touchEvent']) {
                                             return false
                                         }
                                     };
                                     if (_0x2f8ex5['data']()['axis'] == 'hor') {
                                         var options9 = methodsb(methodsc)['top'];
                                         var optionsa = methodsb(methodsc)['left'];
                                         var optionsb = Math['abs'](options9 - options0);
                                         var optionsc = Math['abs'](optionsa - options1);
                                         options2 += optionsb;
                                         options3 += optionsc;
                                         if (options2 > options3) {
                                             $(document)['trigger']($a)
                                         } else {
                                             options7()
                                         }
                                     } else {
                                         options7()
                                     }
                                 });
                                 $(document)['on']($a, function(methodsc) {
                                     if (_0x2f8ex5['data']()['dragging']) {
                                         if (_0x2f8ex5['data']()['dragStop'] !== undefined) {
                                             _0x2f8ex5['data']()['dragStop']()
                                         };
                                         _0x2f8ex5['data']()['dragging'] = false
                                     };
                                     if ($(methodsc['target'])['is'](_0x2f8ex5) || $(methodsc['target'])['closest'](_0x2f8ex5)['length']) {
                                         $(document)['off']($8);
                                         $('html')['removeClass']('grabbing');
                                         if (_0x2f8ex5['data']()['hoverStop']) {
                                             _0x2f8ex5['trigger']('mouseenter.' + _0x2f8ex5['data']()['mElIndex'])
                                         } else {
                                             $d(_0x2f8ex5['data']()['nowPos']())
                                         }
                                     } else {
                                         $(document)['off']($8);
                                         $d(_0x2f8ex5['data']()['nowPos']());
                                         $('html')['removeClass']('grab');
                                         $('html')['removeClass']('grabbing')
                                     };
                                     $(document)['off']($a);
                                     setTimeout(function() {
                                         _0x2f8ex5['data']()['clickEventFlag'] = true
                                     }, 300)
                                 });
                                 if (!_0x2f8ex5['data']()['touchScreen']) {
                                     return false
                                 }
                             })
                         };
                         var optionsd = function(_0x2f8ex5) {
                             var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                             var optionse = _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5);
                             var optionsf = -_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf);
                             _0x2f8ex5['data']()['startPos'] = optionse;
                             _0x2f8ex5['data']()['endPos'] = optionsf;
                             if (_0x2f8ex5['data']()['circular']) {
                                 optionsf = -(_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) + (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) - _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5)));
                                 _0x2f8ex5['data']()['endPos'] = optionsf;
                                 var p0 = _0x2f8ex5['data']()['startShow'] ? _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) : (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5) + _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf));
                                 $d(p0)
                             } else {
                                 var p1 = _0x2f8ex5['data']()['startShow'] ? 0 : optionse;
                                 $d(p1)
                             }
                         };
                         _0x2f8ex5['data']()['getPosition'] = optionsd;
                         var p2 = function(_0x2f8ex5) {
                             var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                             var optionse = _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5);
                             var optionsf = -_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf);
                             _0x2f8ex5['data']()['startPos'] = optionse;
                             _0x2f8ex5['data']()['endPos'] = optionsf;
                             if (_0x2f8ex5['data']()['circular']) {
                                 optionsf = -(_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) + (_0x2f8ex5['data']()['outerSizeFunc'](_0x2f8exf) - _0x2f8ex5['data']()['outerSizeFunc'](_0x2f8ex5)));
                                 _0x2f8ex5['data']()['endPos'] = optionsf
                             }
                         };
                         _0x2f8ex5['data']()['setPosition'] = p2;
                         if (!_0x2f8ex5['data']()['updateCont']) {
                             _0x2f8ex5['data']()['getPosition'](_0x2f8ex5)
                         };
                         var p3 = function() {
                             if (document['hidden']) {
                                 if (!_0x2f8ex5['data']()['stopped']) {
                                     _0x2f8exf['stop'](true);
                                     _0x2f8ex5['data']()['stopped'] = true;
                                     if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                         _0x2f8ex5['data']()['moveStop']()
                                     }
                                 }
                             } else {
                                 $d(_0x2f8ex5['data']()['nowPos']())
                             }
                         };
                         $(document)['on']('visibilitychange', function() {
                             p3()
                         });
                         var p4 = function() {};
                         $(window)['on']('resize.' + _0x2f8ex5['data']()['mElIndex'], function() {
                             clearTimeout(p4);
                             p4 = setTimeout(function() {
                                 _0x2f8ex5['liMarquee']('resetPosition')
                             }, 300)
                         });
                         var p5 = function() {};
                         var p6 = function() {
                             if (_0x2f8ex5['data']()['stopOutScreen']) {
                                 if ((_0x2f8ex5['offset']()['top'] + _0x2f8ex5['outerHeight']()) < $(window)['scrollTop']() || _0x2f8ex5['offset']()['top'] > ($(window)['scrollTop']() + $(window)['height']())) {
                                     if (!_0x2f8ex5['data']()['stopped']) {
                                         _0x2f8exf['stop'](true);
                                         _0x2f8ex5['data']()['stopped'] = true;
                                         if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                             _0x2f8ex5['data']()['moveStop']()
                                         }
                                     }
                                 } else {
                                     $d(_0x2f8ex5['data']()['nowPos']())
                                 }
                             } else {
                                 $d(_0x2f8ex5['data']()['nowPos']())
                             }
                         };
                         $(window)['on']('scroll.' + _0x2f8ex5['data']()['mElIndex'], function() {
                             if (_0x2f8ex5['data']()['scrollStop'] && !_0x2f8ex5['data']()['stopped']) {
                                 _0x2f8exf['stop'](true);
                                 _0x2f8ex5['data']()['stopped'] = true;
                                 if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                     _0x2f8ex5['data']()['moveStop']()
                                 }
                             };
                             clearTimeout(p5);
                             p5 = setTimeout(function() {
                                 p6()
                             }, 100)
                         });
                         _0x2f8ex5['find']('a')['on']('click', function() {
                             if (!_0x2f8ex5['data']()['clickEventFlag']) {
                                 return false
                             }
                         });
                         p6()
                     } else {
                         _0x2f8exf['text']('marquee "' + _0x2f8ex5['attr']('class') + '" elements is hidden or missing');
                         $0();
                         _0x2f8ex5['liMarquee']('stop');
                         _0x2f8ex5['liMarquee']('removeContent')
                     }
                 };
                 if (_0x2f8ex5['data']()['xml']) {
                     $['ajax']({
                         url: _0x2f8ex5['data']()['xml'],
                         dataType: 'xml',
                         success: function(p7) {
                             var p8 = $(p7)['find']('item');
                             var p9 = p8['length'];
                             for (var pa = 0; pa < p9; pa++) {
                                 var pb = p8['eq'](pa);
                                 var pc = pb['find']('title')['text']();
                                 var pd = pb['find']('link')['text']();
                                 if (pb['find']('link')['length']) {
                                     $('<div class="mItem"><a href="' + pd + '">' + pc + '</a></div>')['appendTo'](_0x2f8exf)
                                 } else {
                                     $('<div class="mItem">')['text'](pc)['appendTo'](_0x2f8exf)
                                 }
                             };
                             $0()
                         }
                     })
                 } else {
                     $0()
                 }
             })
         },
         getContent: function() {
             var _0x2f8exf = $(this)['data']()['mMove'];
             var pe;
             if (!_0x2f8exf['is'](':empty')) {
                 var pf = _0x2f8exf['html']();
                 var _0x2f8ex50 = $('<div>')['html'](pf);
                 _0x2f8ex50['find']('.clone')['remove']();
                 _0x2f8ex50['find']('.cloneContent')['remove']();
                 pe = $['trim'](_0x2f8ex50['html']())
             } else {
                 pe = false
             };
             return pe
         },
         addContent: function(_0x2f8ex51) {
             return this['each'](function() {
                 var _0x2f8ex5 = $(this);
                 var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                 var _0x2f8ex52 = function() {
                     if (!_0x2f8ex5['data']()['removing']) {
                         var _0x2f8ex53 = '<div class="mItem">' + _0x2f8ex51 + '</div>';
                         var _0x2f8ex54 = _0x2f8ex5['liMarquee']('getContent');
                         var _0x2f8ex55 = _0x2f8ex54;
                         if (!_0x2f8exf['find']('.mItem')['length'] && _0x2f8ex54) {
                             _0x2f8ex54 = '<div class="mItem">' + _0x2f8ex54 + '</div>'
                         };
                         if (_0x2f8ex51) {
                             if (_0x2f8ex5['data']()['direction'] === 'left' || _0x2f8ex5['data']()['direction'] === 'top') {
                                 _0x2f8ex55 = _0x2f8ex54 ? _0x2f8ex54 + _0x2f8ex53 : _0x2f8ex53
                             };
                             if (_0x2f8ex5['data']()['direction'] === 'right' || _0x2f8ex5['data']()['direction'] === 'bottom') {
                                 _0x2f8ex55 = _0x2f8ex54 ? _0x2f8ex53 + _0x2f8ex54 : _0x2f8ex53
                             }
                         };
                         _0x2f8ex5['liMarquee']('removeContent');
                         var _0x2f8ex56 = function() {
                             if (!_0x2f8ex5['data']()['removing']) {
                                 _0x2f8exf['html'](_0x2f8ex55);
                                 if (_0x2f8ex54) {
                                     _0x2f8ex5['data']()['updateCont'] = true
                                 };
                                 _0x2f8ex5['liMarquee'](_0x2f8ex5['data']());
                                 if (_0x2f8ex5['data']()['updateCont']) {
                                     _0x2f8ex5['data']()['setPosition'](_0x2f8ex5);
                                     _0x2f8ex5['data']()['anim'](_0x2f8ex5['data']()['nowPos']())
                                 }
                             } else {
                                 setTimeout(function() {
                                     _0x2f8ex56()
                                 }, _0x2f8ex5['data']()['removeContentFadeDuration'])
                             }
                         };
                         _0x2f8ex56()
                     } else {
                         setTimeout(function() {
                             _0x2f8ex52()
                         }, _0x2f8ex5['data']()['removeContentFadeDuration'])
                     }
                 };
                 _0x2f8ex52()
             })
         },
         removeContent: function() {
             return this['each'](function() {
                 $(this)['data']()['removing'] = true;
                 var _0x2f8ex5 = $(this);
                 var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                 _0x2f8exf['children']()['animate']({
                     opacity: 0
                 }, _0x2f8ex5['data']()['removeContentFadeDuration']);
                 setTimeout(function() {
                     _0x2f8ex5['data']()['updateCont'] = true;
                     if (!_0x2f8ex5['data']()['stopped']) {
                         _0x2f8exf['stop'](true);
                         _0x2f8ex5['data']()['stopped'] = true
                     };
                     _0x2f8ex5['off']('mouseenter.' + _0x2f8ex5['data']()['mElIndex']);
                     _0x2f8ex5['off']('mouseleave.' + _0x2f8ex5['data']()['mElIndex']);
                     _0x2f8ex5['off']($(this)['data']()['mousedownEvent']);
                     $(window)['off']('resize.' + _0x2f8ex5['data']()['mElIndex']);
                     $(window)['off']('scroll.' + _0x2f8ex5['data']()['mElIndex']);
                     $(document)['off'](_0x2f8ex5['data']()['moveEvent']);
                     $(document)['off'](_0x2f8ex5['data']()['mouseupEvent']);
                     if (!_0x2f8ex5['data']()['stopped']) {
                         _0x2f8exf['stop'](true);
                         _0x2f8ex5['data']()['stopped'] = true
                     };
                     _0x2f8exf['empty']();
                     _0x2f8ex5['data']()['removing'] = false
                 }, _0x2f8ex5['data']()['removeContentFadeDuration'])
             })
         },
         changeOptions: function(options) {
             return this['each'](function() {
                 var _0x2f8ex5 = $(this);
                 var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                 var _0x2f8ex57 = false;
                 for (var _0x2f8ex58 in options) {
                     if (_0x2f8ex58 != 'scrollAmount' && _0x2f8ex58 != 'scrollDelay' && _0x2f8ex58 != 'direction') {
                         _0x2f8ex57 = true
                     };
                     if (_0x2f8ex58 == 'direction') {
                         if (options[_0x2f8ex58] == 'right' || options[_0x2f8ex58] == 'left') {
                             if (_0x2f8ex5['data']()['direction'] != 'left' && _0x2f8ex5['data']()['direction'] != 'right') {
                                 _0x2f8ex57 = true
                             }
                         };
                         if (options[_0x2f8ex58] == 'top' || options[_0x2f8ex58] == 'bottom') {
                             if (_0x2f8ex5['data']()['direction'] != 'top' && _0x2f8ex5['data']()['direction'] != 'bottom') {
                                 _0x2f8ex57 = true
                             }
                         }
                     }
                 };
                 $['extend'](_0x2f8ex5['data'](), options);
                 if (_0x2f8ex57) {
                     _0x2f8ex5['liMarquee']('destroy');
                     _0x2f8ex5['data']()['updateCont'] = false;
                     _0x2f8ex5['liMarquee'](_0x2f8ex5['data']())
                 } else {
                     _0x2f8ex5['data']()['setPosition'](_0x2f8ex5);
                     _0x2f8ex5['data']()['anim'](_0x2f8ex5['data']()['nowPos']())
                 }
             })
         },
         destroy: function() {
             var _0x2f8ex5 = $(this);
             var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
             _0x2f8ex5['removeAttr']('style')['attr']('style', _0x2f8ex5['data']()['style']);
             if (!_0x2f8ex5['data']()['stopped']) {
                 _0x2f8exf['stop'](true);
                 _0x2f8ex5['data']()['stopped'] = true
             };
             _0x2f8exf['removeAttr']('style')['attr']('style', _0x2f8exf['data']()['style'])['removeData']();
             $('.mItem', _0x2f8ex5)['each'](function() {
                 $(this)['removeAttr']('style')['attr']('style', $(this)['data']()['style'])['removeData']()
             });
             _0x2f8ex5['off']('mouseenter.' + _0x2f8ex5['data']()['mElIndex']);
             _0x2f8ex5['off']('mouseleave.' + _0x2f8ex5['data']()['mElIndex']);
             _0x2f8ex5['off'](_0x2f8ex5['data']()['mousedownEvent']);
             $(window)['off']('resize.' + _0x2f8ex5['data']()['mElIndex']);
             $(window)['off']('scroll.' + _0x2f8ex5['data']()['mElIndex']);
             if (_0x2f8ex5['data']()['moveEvent']) {
                 $(document)['off'](_0x2f8ex5['data']()['moveEvent'])
             };
             if (_0x2f8ex5['data']()['mouseupEvent']) {
                 $(document)['off'](_0x2f8ex5['data']()['mouseupEvent'])
             };
             $('.clone', _0x2f8ex5)['remove']();
             $('.cloneContent', _0x2f8ex5)['remove']();
             var _0x2f8ex59 = _0x2f8exf['html']();
             _0x2f8exf['remove']();
             _0x2f8ex5['html'](_0x2f8ex59)['removeClass']('mIni')['css']({
                 opacity: 1
             })
         },
         stop: function() {
             return this['each'](function() {
                 var _0x2f8ex5 = $(this);
                 if (_0x2f8ex5['is']('.mIni')) {
                     var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                     if (!_0x2f8ex5['data']()['pause']) {
                         _0x2f8ex5['data']()['pause'] = true;
                         if (!_0x2f8ex5['data']()['stopped']) {
                             _0x2f8exf['stop'](true);
                             _0x2f8ex5['data']()['stopped'] = true;
                             if (_0x2f8ex5['data']()['moveStop'] !== undefined) {
                                 _0x2f8ex5['data']()['moveStop']()
                             }
                         }
                     }
                 }
             })
         },
         start: function(_0x2f8ex5a) {
             return this['each'](function() {
                 var _0x2f8ex5 = $(this);
                 if (_0x2f8ex5['data']()['pause']) {
                     var _0x2f8ex5b = _0x2f8ex5a ? _0x2f8ex5a : 0;
                     setTimeout(function() {
                         _0x2f8ex5['data']()['pause'] = false;
                         _0x2f8ex5['data']()['setPosition'](_0x2f8ex5);
                         _0x2f8ex5['data']()['anim'](_0x2f8ex5['data']()['nowPos']());
                         $(window)['trigger']('scroll.' + _0x2f8ex5['data']()['mElIndex'])
                     }, _0x2f8ex5b)
                 }
             })
         },
         resetPosition: function() {
             return this['each'](function() {
                 var _0x2f8ex5 = $(this);
                 if (_0x2f8ex5['is'](':visible')) {
                     var _0x2f8exf = _0x2f8ex5['data']()['mMove'];
                     if (!_0x2f8ex5['data']()['stopped']) {
                         _0x2f8exf['stop'](true);
                         _0x2f8ex5['data']()['stopped'] = true
                     };
                     if (_0x2f8ex5['data']()['direction'] === 'left' || _0x2f8ex5['data']()['direction'] === 'right') {
                         _0x2f8ex5['css']({
                             minHeight: _0x2f8exf['outerHeight']()
                         })
                     };
                     _0x2f8ex5['data']()['setPosition'](_0x2f8ex5);
                     _0x2f8ex5['data']()['anim'](_0x2f8ex5['data']()['nowPos']());
                     $(window)['trigger']('scroll.' + _0x2f8ex5['data']()['mElIndex'])
                 }
             })
         }
     };

     $['fn']['liMarquee'] = function(_0x2f8ex63) {
         if (methods[_0x2f8ex63]) {
             return methods[_0x2f8ex63]['apply'](this, Array['prototype']['slice']['call'](arguments, 1))
         } else {
             if (typeof _0x2f8ex63 === 'object' || !_0x2f8ex63) {
                 return methods['init']['apply'](this, arguments)
             } else {
                 $['error']('\u041C\u0435\u0442\u043E\u0434 ' + _0x2f8ex63 + ' \u0432 jQuery.liMarquee doesn\'t exist')
             }
         }
     }
 })(jQuery)
