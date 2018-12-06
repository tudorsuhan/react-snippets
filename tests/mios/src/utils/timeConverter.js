export const timeConverter = (UNIX_timestamp) => {
    /**
     * Create a new JavaScript Date object based on the timestamp,
     * multiplied by 1000 so that the argument is in milliseconds, not seconds.
     */
    let a = new Date(UNIX_timestamp * 1000);

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    
    return time;
}