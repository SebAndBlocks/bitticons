function getIcon (iconName: string) {
    if ("web" == iconName) {
        return assets.image`web`
    } else if ("xtwit" == iconName) {
        return assets.image`xtwit`
    } else if ("facebook" == iconName) {
        return assets.image`facebook`
    } else if ("insta" == iconName) {
        return assets.image`insta`
    } else if ("tiktok" == iconName) {
        return assets.image`tiktok`
    } else if ("snap" == iconName) {
        return assets.image`snap`
    } else if ("pint" == iconName) {
        return assets.image`pintrest`
    } else if ("whatsapp" == iconName) {
        return assets.image`whatsapp`
    } else if ("linkedin" == iconName) {
        return assets.image`linkedin`
    }
    game.splash("[Bitticons] Unknown Icon:", iconName)
    return assets.image`broken`
}
