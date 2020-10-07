module.exports = function toReadable(number) {
    let arrNum = [number].join('');
    let arrSplit = arrNum.split('');
    if (arrSplit.length == 1) {
        if (arrSplit[0] == 1) {
            return 'one';
        } else if (arrSplit[0] == 2) {
            return 'two';
        } else if (arrSplit[0] == 3) {
            return 'three';
        } else if (arrSplit[0] == 4) {
            return 'four';
        } else if (arrSplit[0] == 5) {
            return 'five';
        } else if (arrSplit[0] == 6) {
            return 'six';
        } else if (arrSplit[0] == 7) {
            return 'seven';
        } else if (arrSplit[0] == 8) {
            return 'eight';
        } else if (arrSplit[0] == 9) {
            return 'nine';
        } else if (arrSplit[0] == 0) {
            return 'zero';
        }
    }
    if (arrSplit.length == 2) {
        if (arrSplit[0] == 1) {
            if (arrSplit[1] == 0) {
                return 'ten';
            } else if (arrSplit[1] == 1) {
                return 'eleven';
            } else if (arrSplit[1] == 2) {
                return 'twelve';
            } else if (arrSplit[1] == 3) {
                return 'thirteen';
            } else if (arrSplit[1] == 4) {
                return 'fourteen';
            } else if (arrSplit[1] == 5) {
                return 'fifteen';
            } else if (arrSplit[1] == 6) {
                return 'sixteen';
            } else if (arrSplit[1] == 7) {
                return 'seventeen';
            } else if (arrSplit[1] == 8) {
                return 'eighteen';
            } else if (arrSplit[1] == 9) {
                return 'nineteen';
            }
        } else if (arrSplit[0] == 2) {
            des = 'twenty';
        } else if (arrSplit[0] == 3) {
            des = 'thirty';
        } else if (arrSplit[0] == 4) {
            des = 'forty';
        } else if (arrSplit[0] == 5) {
            des = 'fifty';
        } else if (arrSplit[0] == 6) {
            des = 'sixty';
        } else if (arrSplit[0] == 7) {
            des = 'seventy';
        } else if (arrSplit[0] == 8) {
            des = 'eighty';
        } else if (arrSplit[0] == 9) {
            des = 'ninety';
        }
        if (arrSplit[1] == 1) {
            fir = 'one';
        } else if (arrSplit[1] == 2) {
            fir = 'two';
        } else if (arrSplit[1] == 3) {
            fir = 'three';
        } else if (arrSplit[1] == 4) {
            fir = 'four';
        } else if (arrSplit[1] == 5) {
            fir = 'five';
        } else if (arrSplit[1] == 6) {
            fir = 'six';
        } else if (arrSplit[1] == 7) {
            fir = 'seven';
        } else if (arrSplit[1] == 8) {
            fir = 'eight';
        } else if (arrSplit[1] == 9) {
            fir = 'nine';
        } else {
            return `${des}`;
        }

        return `${des} ${fir}`;
    }
    if (arrSplit.length == 3) {
        if (arrSplit[0] == 1) {
            sot = 'one hundred';
        } else if (arrSplit[0] == 2) {
            sot = 'two hundred';
        } else if (arrSplit[0] == 3) {
            sot = 'three hundred';
        } else if (arrSplit[0] == 4) {
            sot = 'four hundred';
        } else if (arrSplit[0] == 5) {
            sot = 'five hundred';
        } else if (arrSplit[0] == 6) {
            sot = 'six hundred';
        } else if (arrSplit[0] == 7) {
            sot = 'seven hundred';
        } else if (arrSplit[0] == 8) {
            sot = 'eight hundred';
        } else if (arrSplit[0] == 9) {
            sot = 'nine hundred';
        }
        if (arrSplit[1] == 0) {
            if (arrSplit[2] == 1) {
                return `${sot} one`;
            } else if (arrSplit[2] == 2) {
                return `${sot} two`;
            } else if (arrSplit[2] == 3) {
                return `${sot} three`;
            } else if (arrSplit[2] == 4) {
                return `${sot} four`;
            } else if (arrSplit[2] == 5) {
                return `${sot} five`;
            } else if (arrSplit[2] == 6) {
                return `${sot} six`;
            } else if (arrSplit[2] == 7) {
                return `${sot} seven`;
            } else if (arrSplit[2] == 8) {
                return `${sot} eight`;
            } else if (arrSplit[2] == 9) {
                return `${sot} nine`;
            } else if (arrSplit[2] == 0) {
                return sot;
            }
        } else if (arrSplit[1] == 1) {
            if (arrSplit[2] == 0) {
                return `${sot} ten`;
            } else if (arrSplit[2] == 1) {
                return `${sot} eleven`;
            } else if (arrSplit[2] == 2) {
                return `${sot} twelve`;
            } else if (arrSplit[2] == 3) {
                return `${sot} thirteen`;
            } else if (arrSplit[2] == 4) {
                return `${sot} fourteen`;
            } else if (arrSplit[2] == 5) {
                return `${sot} fifteen`;
            } else if (arrSplit[2] == 6) {
                return `${sot} sixteen`;
            } else if (arrSplit[2] == 7) {
                return `${sot} seventeen`;
            } else if (arrSplit[2] == 8) {
                return `${sot} eighteen`;
            } else if (arrSplit[2] == 9) {
                return `${sot} nineteen`;
            }
        } else if (arrSplit[1] == 2) {
            des = 'twenty';
        } else if (arrSplit[1] == 3) {
            des = 'thirty';
        } else if (arrSplit[1] == 4) {
            des = 'forty';
        } else if (arrSplit[1] == 5) {
            des = 'fifty';
        } else if (arrSplit[1] == 6) {
            des = 'sixty';
        } else if (arrSplit[1] == 7) {
            des = 'seventy';
        } else if (arrSplit[1] == 8) {
            des = 'eighty';
        } else if (arrSplit[1] == 9) {
            des = 'ninety';
        }
        if (arrSplit[2] == 1) {
            fir = 'one';
        } else if (arrSplit[2] == 2) {
            fir = 'two';
        } else if (arrSplit[2] == 3) {
            fir = 'three';
        } else if (arrSplit[2] == 4) {
            fir = 'four';
        } else if (arrSplit[2] == 5) {
            fir = 'five';
        } else if (arrSplit[2] == 6) {
            fir = 'six';
        } else if (arrSplit[2] == 7) {
            fir = 'seven';
        } else if (arrSplit[2] == 8) {
            fir = 'eight';
        } else if (arrSplit[2] == 9) {
            fir = 'nine';
        } else if (arrSplit[2] == 0) {
            return `${sot} ${des}`;
        }
    } else {
        return undefined;
    }
    return `${sot} ${des} ${fir}`;
};