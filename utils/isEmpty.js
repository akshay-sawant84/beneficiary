const isEmpty = (value) => {
	if (value === null || value === undefined) {
		return true;
	}
	if (Array.isArray(value)) {
		return value.length === 0;
	}
	if (
		typeof value === 'object' &&
		!(value instanceof Map) &&
		!(value instanceof Set)
	) {
		return Object.keys(value).length === 0;
	}
	if (typeof value === 'string') {
		return value.trim().length === 0;
	}
	return !value;
};

export default isEmpty;
