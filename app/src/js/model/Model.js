let _hooks = [];

class Model {
    static _hooks(){
    };

    static get _hooks() { return _hooks; }
    static set _hooks(value) { _hooks = value; }

    constructor() {
    }

    static addListener(event, callback, id) {
        if(!_hooks[event]) {
            _hooks[event] = [];
        }

        _hooks[event].push(
            {
                event: event,
                callback: callback,
                id: id
            }
        );
    }

    static trigger(event, data, scope) {
        if(!_hooks[event]) {
            return false;
        }

        var events = _hooks[event];
        for (var index = 0; index < events.length; index++) {
            var event = events[index];
            if(event) {
                event.call(scope || null, data);
            }
        }
        return true;
    }

    _set(name, value) {
        console.log(this);
        if(this[name] == value){
            return false;
        }

        this[name] = value;
        Model.trigger('setValue', {
            name : name,
            value : value
        }, this);
    }

    set(data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var element = data[key];
                this._set(key, element);
            }
        }
    }

    get(key) {
        if(!this[key]) return false;
        return this[key];
    }
}

export default Model;