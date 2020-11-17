
const data = {
  lockOpen: {
    icon: require("./../icons/lock_open.svg"),
    description: "Ikon som skal benyttes for a illustrere tilgangsstryring",
    name: "Tilgangsstryring",
    link: "https://material.io/resources/icons/?icon=lock_open&style=baseline"

  },
  callSplit: {
    icon: require("./../icons/call_split.svg"),
    description: "Ikon som skal benyttes for å illustrere arbeidsflyten til en sak",
    name: "Arbeidsflyt",
    link: "https://material.io/resources/icons/?icon=call_split&style=baseline"
  },
  attachFile: {
    icon: require("./../icons/attach_file.svg"),
    description: "Ikon som skal benyttes for å illustrere vedlegg til en sak",
    name: "Vedlegg",
    link: "https://material.io/resources/icons/?icon=attach_file&style=baseline"
  }
};

export default function fetchIcons() {

  return new Promise((resolve, reject) => {

    setTimeout(
      () => {
        resolve(
          new Response(
            new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
            {
              status: 200,
              statusText: "OK"
            }
          )
        )
      },
      Math.floor(Math.random() * (500 - 50) + 50)
    )
  });

}