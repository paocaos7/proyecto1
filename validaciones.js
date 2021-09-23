function validar_correo(string) {
    let rgex = /(\w{1,})@(\w{1,})\.(com|es|co|org)$/i;
    if (string.length > 14 && string.length < 40 && rgex.test(string)) {
        return true;
    }
    return false;
}
module.exports.validar_correo = validar_correo
