export default function (context) {
  console.log('check-auth js')
  if (process.client) {
    context.store.dispatch("initAuth");
  }
}
