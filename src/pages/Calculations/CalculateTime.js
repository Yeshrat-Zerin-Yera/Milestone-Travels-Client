const CalculateTime = ({ review }) => {
    const reviewTime = review?.time;
    let [hour, minute] = reviewTime.split(':');
    let meridiem;
    hour = parseInt(hour);
    minute = parseInt(minute);
    (hour === 0 || hour < 12) ? meridiem = 'AM' : meridiem = 'PM';
    if (hour === 0) {
        hour = hour + 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    return (
        <span>{hour}:{minute} {meridiem}</span>
    );
};

export default CalculateTime;