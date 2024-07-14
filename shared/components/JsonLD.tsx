export default function JSONLD() {
  const data: { name: string; url: string }[] = [
    { name: '모의 강화하기', url: 'https://goodluck-steel.vercel.app/' },
    {
      name: '운좋은 시바',
      url: 'https://goodluck-steel.vercel.app/luckyshiba',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.map(({ name, url }, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name,
      '@id': url,
      item: url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
