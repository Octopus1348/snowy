const { GLib } = imports.gi
const Utils = imports.misc.extensionUtils
const Extension = Utils.getCurrentExtension()
const { manager: Manager, config: Config } = Extension.imports.js

let manager = null

function init() {}

function enable() {
	const config = new Config('org.gnome.shell.extensions.snowy')
	manager = new Manager()
	manager.startSnowing(config)
}

function disable() {
	manager.stopSnowing()
	manager = null
}
