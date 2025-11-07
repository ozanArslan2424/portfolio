import dayjs from "dayjs";
import "dayjs/locale/en";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);
dayjs.locale("en");

type DInput = dayjs.ConfigType;

export const timestamp = (date?: DInput) => ({
	now: dayjs(new Date()),
	iso: dayjs(date).toISOString(),
	fromNow: dayjs(date).fromNow(),
	shortDate: dayjs(date).format("DD.MM.YYYY"),
	short: dayjs(date).format("DD MMM YYYY"),
	long: dayjs(date).format("DD MMMM YYYY"),
	dateTimeNumber: dayjs(date).format("DD.MM.YYYY HH:mm"),
	dateTimeShort: dayjs(date).format("DD MMM YYYY HH:mm"),
	dateTimeLong: dayjs(date).format("DD MMMM YYYY HH:mm"),
	ordinalDateTime: dayjs(date).format("Do [of] MMMM, [at] HH:mm"),
	date: dayjs(date).format("YYYY-MM-DD"),
	numberInMonth: dayjs(date).format("D"),
	numberInWeek: dayjs(date).format("d"),
	shortName: dayjs(date).format("ddd"),
	name: dayjs(date).format("dddd"),
	time: dayjs(date).format("HH:mm"),
	hour: dayjs(date).format("H"),
	minute: dayjs(date).format("m"),
	second: dayjs(date).format("s"),
	custom: (format: string) => dayjs(date).format(format),
});

export const compareTime = (date: DInput) => ({
	before: (compare: DInput) => dayjs(date).isBefore(compare),
	after: (compare: DInput) => dayjs(date).isAfter(compare),
	between: (start: DInput, end: DInput) => dayjs(date).isBetween(start, end),
	same: (compare: DInput) => dayjs(date).isSame(compare),
});

export const milliseconds = {
	"7d": 7 * 24 * 60 * 60 * 1000, // 7 days
	"1d": 24 * 60 * 60 * 1000, // 1 day
	"12h": 12 * 60 * 60 * 1000, // 12 hours
	"1h": 60 * 60 * 1000, // 1 hour
	"30m": 30 * 60 * 1000, // 30 minutes
	"15m": 15 * 60 * 1000, // 15 minutes
	"10m": 10 * 60 * 1000, // 10 minutes
	"5m": 5 * 60 * 1000, // 5 minutes
	"4m": 4 * 60 * 1000, // 4 minutes
	"1m": 60 * 1000, // 1 minute
	"30s": 30 * 1000, // 30 seconds
	"15s": 15 * 1000, // 15 seconds
};

export const seconds = {
	"10m": 10 * 60, // 10 minutes
	"5m": 5 * 60, // 5 minutes
	"1m": 60, // 1 minute
	"10s": 10, // 10 seconds
	"5s": 5, // 5 seconds
	"1s": 1, // 1 second
};
