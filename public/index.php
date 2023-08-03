<?php
header("Access-Control-Allow-Origin: uxgroup.com.br");
header("Access-Control-Allow-Headers: *");
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://blog.uxgroup.com.br/wp-json/wp/v2/posts?per_page=1&_embed=1&tags=92');
curl_setopt($ch, CURLOPT_HTTPAUTH, 'glayson.murollo75@gmail.com:Val$aU(NeL$1#C@QsTnN');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$result = json_decode(curl_exec($ch), true)[0];

$featured = [
  'id' => $result['id'],
  'link' => $result['link'],
  'date' => $result['date'],
  'title' => [
    'rendered' => $result['title']['rendered']
  ],
  'excerpt' => [
    'rendered' => $result['excerpt']['rendered']
  ],
  '_embedded' => [
    'wp:featuredmedia' => [
      0 => [
        'source_url' => $result['_embedded']['wp:featuredmedia'][0]['source_url'],
      ]
    ],
    'author' => [
      0 => [
        'link' => $result['_embedded']['author'][0]['link'],
        'name' => $result['_embedded']['author'][0]['name'],
      ]
    ],
    'wp:term' => [
      0 => [
        0 => [
          'link' => $result['_embedded']['wp:term'][0][0]['link'],
          'name' => $result['_embedded']['wp:term'][0][0]['name'],
        ]
      ]
    ]
  ],
];

curl_close($ch);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://blog.uxgroup.com.br/wp-json/wp/v2/posts?per_page=4&_embed=1');
curl_setopt($ch, CURLOPT_HTTPAUTH, 'glayson.murollo75@gmail.com:Val$aU(NeL$1#C@QsTnN');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$posts = [];

foreach (json_decode(curl_exec($ch), true) as $result) {
  $post = [
    'id' => $result['id'],
    'link' => $result['link'],
    'date' => $result['date'],
    'title' => [
      'rendered' => $result['title']['rendered']
    ],
    'excerpt' => [
      'rendered' => $result['excerpt']['rendered']
    ],
    '_embedded' => [
      'wp:featuredmedia' => [
        0 =>[
          'source_url' => $result['_embedded']['wp:featuredmedia'][0]['source_url'] ?? null,
        ]
      ],
      'author' => [
        0 => [
          'link' => $result['_embedded']['author'][0]['link'],
          'name' => $result['_embedded']['author'][0]['name'],
        ]
      ],
      'wp:term' => [
        0 => [
          0 => [
            'link' => $result['_embedded']['wp:term'][0][0]['link'],
            'name' => $result['_embedded']['wp:term'][0][0]['name'],
          ]
        ]
      ]
    ],
  ];
  array_push($posts, $post);
}

curl_close($ch);

$result = [
  'featured' => $featured,
  'posts' => $posts,
];

echo json_encode($result);
?>

