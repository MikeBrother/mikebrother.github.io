/*
- Enable triggerable
- Enter url in modelURL or description
*/
(function () {
    var LoadAvatar = /** @class */ (function () {
        function LoadAvatar() {
        }
        LoadAvatar.prototype.loadAvatar = function (entityID) {
            var entity = Entities.getEntityProperties(entityID, ["modelURL", "description", "name"]);
            var confirm = Window.confirm((entity.name) ?
                "Вы хотите выбрать этого аватара: " + entity.name :
                "Вы хотите загрузить этого аватара?");
            if (confirm) {
                if (entity.description) {
                    MyAvatar.useFullAvatarURL(entity.description, entity.name);
                }
                else {
                    MyAvatar.useFullAvatarURL(entity.modelURL, entity.name);
                }
            }
            else {
                Tablet.getTablet("com.highfidelity.interface.tablet.system")
                    .gotoHomeScreen();
            }
        };
        LoadAvatar.prototype.startFarTrigger = function (entityID) {
            this.loadAvatar(entityID);
        };
        LoadAvatar.prototype.clickDownOnEntity = function (entityID, event) {
            if (event.isLeftButton)
                this.loadAvatar(entityID);
        };
        return LoadAvatar;
    }());
    return new LoadAvatar();
});
