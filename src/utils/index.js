import moment from 'moment'

export const formatDateTimeAgo = datetime => moment(datetime).fromNow()