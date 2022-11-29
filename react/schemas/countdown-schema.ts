const countdownSchema = {
  title: 'Custom Countdown',
  description:
    'Countdown that is diplayed when an specific promotion is action for a limited time',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
  },
}

export default countdownSchema
