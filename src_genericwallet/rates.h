#include "os.h"
typedef struct tickerRate_t {
    char ticker[10];
    int rate;
} tickerRate_t;
extern tickerRate_t const TICKER_RATES[1];
