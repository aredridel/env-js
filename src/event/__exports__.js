/*
 * Envjs @VERSION@
 * Pure JavaScript Browser Environment
 * By John Resig <http://ejohn.org/> and the Envjs Team
 * Copyright 2008-2010 John Resig, under the MIT License
 *
 * This file simply provides the global definitions we need to
 * be able to correctly implement to core browser DOM Event interfaces.
 */
if(require && exports) {
    exports.Event = Event;
    exports.MouseEvent = MouseEvent;
    exports.UIEvent = UIEvent;
    exports.KeyboardEvent = KeyboardEvent;
    exports.MutationEvent = MutationEvent;
    exports.DocumentEvent = DocumentEvent;
    exports.EventTarget = EventTarget;
    exports.EventException = EventException;
    //nonstandard but very useful for implementing mutation events
    //among other things like general profiling
    exports.Aspect = Aspect;
}
