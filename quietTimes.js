async function activityTable(day) {
  // Read the list of log files
  const logFileList = await textFile("camera_logs.txt");
  const logFiles = logFileList.trim().split("\n");  // Split to get each log file name
  
  // Initialize an array to hold activity counts for each hour (24 hours in a day)
  const hourlyActivity = Array(24).fill(0);

  // Process each log file
  for (const file of logFiles) {
    const logData = await textFile(file);  // Read the log file content
    const timestamps = logData.trim().split("\n");  // Split into individual timestamps

    for (const timestampStr of timestamps) {
      const timestamp = Number(timestampStr);  // Convert to a number
      const date = new Date(timestamp);  // Create a Date object

      // Check if the entry matches the specified day
      if (date.getDay() === day) {
        const hour = date.getHours();  // Get the hour of the day
        hourlyActivity[hour] += 1;     // Increment the count for this hour
      }
    }
  }

  return hourlyActivity;
}

// Example usage:
activityTable(1).then(table => console.log(activityGraph(table)));
