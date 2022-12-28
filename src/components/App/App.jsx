import React, { useState } from 'react';

import { Box } from 'components/Box';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onCountFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
   }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Section title="Please, leave feedback">
          <Box display="flex" flexDirection="row" alignItems="center">
            <FeedbackOptions
              options={options}
              onCountFeedback={onCountFeedback}
            />
          </Box>
        </Section>

        <Section title="Statistics" display="flex">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Box>
    );
  }