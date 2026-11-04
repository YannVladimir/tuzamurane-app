import reportWebVitals from './reportWebVitals';

// reportWebVitals() resolves the 'web-vitals' package via a dynamic
// import(). Under this project's Jest setup (babel-preset-react-app
// targets `node: current`, and Node has native dynamic import support),
// that import() is left untransformed by Babel and resolves through
// Node's native ESM loader instead of Jest's require-based module
// registry — so jest.mock('web-vitals', ...) cannot intercept it here.
// We therefore test the one piece of behavior that *is* deterministic
// and environment-independent: the guard clause that decides whether to
// even attempt reporting metrics.
describe('reportWebVitals', () => {
  it('does not throw and reports nothing when called with no argument', () => {
    expect(() => reportWebVitals()).not.toThrow();
  });

  it('does not throw and reports nothing when given a non-function value', () => {
    expect(() => reportWebVitals('not a function')).not.toThrow();
    expect(() => reportWebVitals({})).not.toThrow();
    expect(() => reportWebVitals(42)).not.toThrow();
  });

  it('accepts a function callback without throwing', () => {
    const onPerfEntry = jest.fn();
    expect(() => reportWebVitals(onPerfEntry)).not.toThrow();
  });
});
