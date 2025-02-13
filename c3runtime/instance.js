"use strict";
{
    globalThis.C3.Plugins.Fontanus_I18Next.Instance = class C3I18NextInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();
        }

        init(language, resources) {
            i18next.init({
                lng: language,
                resources: resources,
                debug: this._runtime.IsPreview()
            }).then(t => {
                this._trigger(globalThis.C3.Plugins.Fontanus_I18Next.Cnds.initialized)
            })
        }

        changeLanguage(language) {
            i18next.changeLanguage(language).then(t => {
                this._trigger(globalThis.C3.Plugins.Fontanus_I18Next.Cnds.initialized)
            })
        }

        t(key, options) {
            if (!i18next.isInitialized) {
                console.warn('i18next is not initialized')
                return ''
            }

            return i18next.t(key, options)
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}