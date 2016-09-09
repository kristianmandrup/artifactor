module.exports = (fn) => {
    console.log('async wrap', fn);
    return async (done) => {
        try {
            await fn();
            console.log('done with success');
            done();
        } catch (err) {
            console.log('done with failure');
            done(err);
        }
    };
};
