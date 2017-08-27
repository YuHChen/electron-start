const {remote, ipcRenderer} = require('electron')
const {Menu} = remote

var menu = Menu.buildFromTemplate([
    {
        label: 'Electron',
        submenu: [
            {
                label: 'Prefs',
                click: function () {
                    ipcRenderer.send('toggle-prefs')
                }
            }
        ]
    }
])
Menu.setApplicationMenu(menu)
