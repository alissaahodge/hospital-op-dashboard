export const STATUS_OPTIONS = [
  {"val": "all", "display": "All"},
  {"val": "in-progress", "display": "In progress"},
  {"val":"waiting", "display": "Waiting"},
  {"val":"completed", "display": "Completed"}
];

export const STATUS_OPTIONS_CYCLE =  {
  'waiting': 'in-progress',
  'in-progress': 'completed',
  'completed': 'waiting'
};