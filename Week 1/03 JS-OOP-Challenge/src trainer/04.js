class Config {
    constructor(config) {
        this.config = config;
    }

    put(key, value) {
        this.config.put(key, value);
    }

    get(key) {
        return this.config.get(key);
    }

    remove(key) {
        this.config.remove(key);
    }
}

class ConfigFilesStorage {
    constructor(file) {
        this.file = file;
    }
}