Leave undefined if you want to intercept every operation, otherwise provide either a {@link MatcherFn | `matcher function`} or a {@link MatcherObject | `matcher object`} with properties like `clientName` and/or a partial set of `variables` that have to match for a given operation to be intercepted