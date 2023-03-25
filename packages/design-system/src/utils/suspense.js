/**
 * createResource is a function that calls an async function that fetches data.
 * it's primary use is with components that will make use of React Suspense
 * @param {function} asyncFn function that fetches data
 * @returns {{read: function}} object with a read method to handle async status
 */
export function createResource(asyncFn) {
  let status = "pending";
  let result;

  const promise = asyncFn().then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw promise;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
}
