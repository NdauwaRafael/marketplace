import moment from "moment";

export function formatDateTime(dateString) {
    const parsed = moment(new Date(dateString));
    if (!parsed.isValid()) {
        return dateString;
    }
    return parsed.format('H A on D MMM YYYY');
}