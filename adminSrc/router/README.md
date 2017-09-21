The router defines the API that exposes the ability for clients or other iot devices like the dctrl-fobtap to create events.

There is much left to do here authentication (fob authentication is in place for some but needs to be formalized/ensured to be complete), validation.

I'm considering simplifying this greatly. One post endpoint to create events, validation and response. Then the Api per state only needs to worry about what history needs to be served.
