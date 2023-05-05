

export const formatDurationFromSeconds = (seconds: number, showHours: boolean = true): string => {
	if (showHours) {
		var hours = Math.floor(seconds / 3600);
		var minutes = Math.floor(seconds / 60) - hours * 60;
	
		return `${hours}h ${minutes}m`;
	}

	var minutes = Math.floor(seconds / 60);
	var seconds = seconds - minutes * 60;
	return `${minutes}m ${seconds}s`;
};
