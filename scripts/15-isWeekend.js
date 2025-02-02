
function isWeekend(date){
  const dayofWeek=date.format('dddd');

  return dayofWeek === 'Saturday' || dayofWeek ==='Sunday';
}

export default isWeekend