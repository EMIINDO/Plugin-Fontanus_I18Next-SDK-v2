"use strict";
{
    globalThis.C3.Plugins.Fontanus_I18Next.Cnds = {
        "initialized": function stepFinished() {
			return true  // trigger
        },
        "isInitialized": function isInitialized() {
            return i18next.isInitialized
        }
    };
}