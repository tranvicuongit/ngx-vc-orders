import * as moment from "moment";
import * as crypto from "crypto-js";

export class Helpers {
  public static PRIVATE_KEY = "t2pwtdt5bOX2gu0cT2MfTHx6mkCGq8DL";
  public static encrypt(_value: string) {
    return crypto.AES.encrypt(_value.toString(), this.PRIVATE_KEY).toString();
  }

  public static setLoading(show) {
    if (show) {
      document.getElementById('loadingPage').style.display = 'block';
    } else {
      document.getElementById('loadingPage').style.display = 'none';
    }
  }

  public static decrypt(_value: string) {
    return crypto.AES.decrypt(_value, this.PRIVATE_KEY).toString(
      crypto.enc.Utf8
    );
  }

  public static convertDateFromUTC(_value, format?: string): string {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const _date = moment(_value);
    if (!moment.isMoment(_date)) {
      return "";
    }

    const __format = format ? format : "YYYY-MM-DD";
    return _date.format(__format);
  }
  public static convertDateToUTC(
    _value,
    format?: string,
    formatConvert?: string
  ): string {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const __format =
      format == null || format === undefined ? format : "DD/MM/YYYY";
    const _date = moment(_value, __format);

    if (!moment.isMoment(_date)) {
      return "";
    }

    const __formatConvert =
      formatConvert == null || formatConvert === undefined
        ? "x"
        : formatConvert;
    return _date.format(__formatConvert);
  }

  public static convertToUTCfromDate(_value, formatConvert?: string): string {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const _date = moment(_value);

    if (!moment.isMoment(_date)) {
      return "";
    }

    const __formatConvert =
      formatConvert == null || formatConvert === undefined
        ? "x"
        : formatConvert;
    return _date.format(__formatConvert);
  }

  public static getTimeFromString(_value, format?: string, retFormat?: string) {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const __format = format ? format : "HH:mm";
    const _date = moment.utc(_value, __format);

    if (!moment.isMoment(_date)) {
      return "";
    }

    return _date.format(
      retFormat == null || retFormat === undefined ? "HH" : retFormat
    );
  }

  public static getHourFormat(hour: number, minute: number) {
    let text = "";
    text =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minute < 10 ? "0" + minute : minute);

    return text;
  }

  public static getFromUnix(_value, retFormat?: string) {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const _date = moment.unix(_value);

    if (!moment.isMoment(_date)) {
      return "";
    }

    return _date.format(
      retFormat == null || retFormat === undefined
        ? "DD/MM/YYYY HH:mm"
        : retFormat
    );
  }

  public static getUnixfromDate(_value, format?: string, isUTC?: boolean) {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const _date = isUTC
      ? moment.utc(
          _value,
          format == null || format === undefined ? "DD/MM/YYYY HH:mm" : format
        )
      : moment(
          _value,
          format == null || format === undefined ? "DD/MM/YYYY HH:mm" : format
        );

    if (!moment.isMoment(_date)) {
      return "";
    }

    return _date.unix();
  }

  public static getToday() {
    return moment().valueOf();
  }

  public static sortObjbyKey(list, key) {
    function compare(a, b) {
      a = a[key];
      b = b[key];
      const type =
        typeof a === 'string' && typeof b === 'string' ? 'string' : 'number';
      let result;
      if (type === 'string') {
        result = a.localeCompare(b);
      } else {
        result = a - b;
      }
      return result;
    }
    return list.sort(compare);
  }

  public static getUnixfromDateToMilisecond(
    _value,
    format?: string,
    isUTC?: boolean
  ) {
    if (_value === "" || _value === null || _value === undefined) {
      return "";
    }
    const _date = isUTC
      ? moment.utc(
          _value,
          format == null || format === undefined ? "DD/MM/YYYY HH:mm" : format
        )
      : moment(
          _value,
          format == null || format === undefined ? "DD/MM/YYYY HH:mm" : format
        );

    if (!moment.isMoment(_date)) {
      return "";
    }

    return _date.valueOf();
  }

  public static GroupBy(_list: any[], _key: string) {
    const groupedObj = _list.reduce((prev, cur) => {
      if (!prev[cur[_key]]) {
        prev[cur[_key]] = [cur];
      } else {
        prev[cur[_key]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({
      key,
      value: groupedObj[key]
    }));
  }

  public static focusInputbyId(_id) {
    document.getElementById(_id).focus();
  }
}
