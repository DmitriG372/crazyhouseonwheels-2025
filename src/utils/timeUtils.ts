export const isRunningLate = (activities: { time: string; description: string }[]): boolean => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  for (const activity of activities) {
    const [hours, minutes] = activity.time.split(':').map(Number);
    const activityTime = hours * 60 + minutes;
    
    if (currentTime > activityTime + 30) {
      return true;
    }
  }
  
  return false;
};