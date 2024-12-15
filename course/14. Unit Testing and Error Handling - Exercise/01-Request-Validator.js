function solveCurTask(obj) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const uriPattern = /^[a-zA-Z.0-9]+$/;
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const msgPattern = /[<>\\'&"]/g;

  if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');
  } else if (!obj.hasOwnProperty('uri') || !uriPattern.test(obj.uri) || obj.uri === '') {
    throw new Error('Invalid request header: Invalid URI');
  } else if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  } else if (!obj.hasOwnProperty('message') || msgPattern.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return obj;
}

try {
  console.log(solveCurTask({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }));
  console.log(solveCurTask({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }));
} catch (err) {
  console.log(err.message);
}