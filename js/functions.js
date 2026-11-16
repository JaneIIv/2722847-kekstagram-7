/**
 * Проверяет, укладывается ли встреча в рамки рабочего дня.
 *
 * @param {string} workStart
 * @param {string} workEnd
 * @param {string} meetStart
 * @param {number} duration
 * @returns {boolean}
 */
// eslint-disable-next-line no-unused-vars
function isMeetingWithinWorkday(workStart, workEnd, meetStart, duration) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMin = toMinutes(workStart);
  const workEndMin = toMinutes(workEnd);
  const meetStartMin = toMinutes(meetStart);
  const meetEndMin = meetStartMin + duration;

  return meetStartMin >= workStartMin && meetEndMin <= workEndMin;
}
