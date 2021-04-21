# Pseudocode

## Start timer function

- Check for interval
- Set interval only if there is no interval
- Set timer for interval (100 ms)

## Increment time function

- Seconds should be increased at 100 hundredths of a second
- Hundredths should go back to 00
- When seconds are at 60 go back to 00.00

## Set Stopwatch values function

- Set up values for hundredths and seconds

## Set Stopwatch time function

- Access DOM to change values

## Stop timer function

- Check for interval
- Clear the interval var
- Clear interval if there is one

## Reset timer function

- Clear interval if there is one
- Clear the interval var
- When reset button is clicked, hundredths & seconds go back to 00

# Improvments

## Intervals

- Create a function that tells (returns) if the interval is already set

## Parameters

- Return the display values from the function and then use those values in the stopwatch time function

## Add minutes

- Add minutes to the DOM
- Set up values for minutes
- Minutes should be increased every 60 seconds
- Hundredths and seconds should go back to 00 after every minute increment

## Create stop/start button

- When click start, button change to stop and vice-versa.
