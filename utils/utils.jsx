const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const getDayName = date => {
    const a = new Date(date);
    const days = [];
    days[0] = 'Dim.';
    days[1] = 'Lun.';
    days[2] = 'Mar.';
    days[3] = 'Mer.';
    days[4] = 'Jeu.';
    days[5] = 'Ven.';
    days[6] = 'Sam.';
    return days[a.getDay()];
};

const getHoursMinutes = datetime => {
    const _datetime = new Date(datetime);
    let hour = _datetime.getHours();
    let minutes = _datetime.getMinutes();

    hour = ('0' + hour).slice(-2);
    minutes = ('0' + minutes).slice(-2);

    return hour + ':' + minutes;
};

export default { wait, getDayName, getHoursMinutes };