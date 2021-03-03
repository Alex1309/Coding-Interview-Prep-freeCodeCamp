{\rtf1\ansi\ansicpg1252\cocoartf2577
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red0\green0\blue107;\red19\green118\blue70;\red15\green112\blue1;\red144\green1\blue18;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c6275\c49412;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;\cssrgb\c63922\c8235\c8235;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl540\partightenfactor0

\f0\fs36 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 updateInventory\cf4 \strokec4 (\cf5 \strokec5 arr1\cf4 \strokec4 , \cf5 \strokec5 arr2\cf4 \strokec4 ) \{\cb1 \
\cf2 \cb3 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 all\cf4 \strokec4  = \cf5 \strokec5 arr1\cf4 \strokec4 .\cf5 \strokec5 concat\cf4 \strokec4 (\cf5 \strokec5 arr2\cf4 \strokec4 )\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf5 \cb3 \strokec5 console\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf5 \strokec5 all\cf4 \strokec4 )\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf2 \cb3 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 allfixed\cf4 \strokec4  = []\cb1 \
\cf2 \cb3 \strokec2 for\cf4 \strokec4 (\cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 i\cf4 \strokec4 =\cf6 \strokec6 0\cf4 \strokec4 ;\cf5 \strokec5 i\cf4 \strokec4 <\cf5 \strokec5 all\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ;\cf5 \strokec5 i\cf4 \strokec4 ++)\{\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 for\cf4 \strokec4 (\cf2 \strokec2 let\cf4 \strokec4  \cf5 \strokec5 j\cf4 \strokec4 =\cf5 \strokec5 i\cf4 \strokec4 +\cf6 \strokec6 1\cf4 \strokec4 ;\cf5 \strokec5 j\cf4 \strokec4 <\cf5 \strokec5 all\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ;\cf5 \strokec5 j\cf4 \strokec4 ++)\{\cb1 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4 (\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf6 \strokec6 1\cf4 \strokec4 ]==\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 j\cf4 \strokec4 ][\cf6 \strokec6 1\cf4 \strokec4 ])\{\cb1 \
\cb3             \cf2 \strokec2 if\cf4 \strokec4 (\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf6 \strokec6 0\cf4 \strokec4 ]>\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 j\cf4 \strokec4 ][\cf6 \strokec6 0\cf4 \strokec4 ])\cb1 \
\cb3                 \cf5 \strokec5 allfixed\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 (\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ])\cb1 \
\cb3             \cf2 \strokec2 else\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 allfixed\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 (\cf5 \strokec5 all\cf4 \strokec4 [\cf5 \strokec5 j\cf4 \strokec4 ])\cb1 \
\cb3         \}\cb1 \
\cb3     \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf5 \cb3 \strokec5 console\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf5 \strokec5 allfixed\cf4 \strokec4 )\cb1 \
\
\pard\pardeftab720\sl540\partightenfactor0
\cf4 \cb3 \}\cb1 \
\
\pard\pardeftab720\sl540\partightenfactor0
\cf7 \cb3 \strokec7 // Example inventory lists\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl540\partightenfactor0
\cf2 \cb3 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 curInv\cf4 \strokec4  = [\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf4 \cb3     [\cf6 \strokec6 21\cf4 \strokec4 , \cf8 \strokec8 "Bowling Ball"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 2\cf4 \strokec4 , \cf8 \strokec8 "Dirty Sock"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 1\cf4 \strokec4 , \cf8 \strokec8 "Hair Pin"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 5\cf4 \strokec4 , \cf8 \strokec8 "Microphone"\cf4 \strokec4 ]\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\sl540\partightenfactor0
\cf2 \cb3 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 newInv\cf4 \strokec4  = [\cb1 \
\pard\pardeftab720\sl540\partightenfactor0
\cf4 \cb3     [\cf6 \strokec6 2\cf4 \strokec4 , \cf8 \strokec8 "Hair Pin"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 3\cf4 \strokec4 , \cf8 \strokec8 "Half-Eaten Apple"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 67\cf4 \strokec4 , \cf8 \strokec8 "Bowling Ball"\cf4 \strokec4 ],\cb1 \
\cb3     [\cf6 \strokec6 7\cf4 \strokec4 , \cf8 \strokec8 "Toothpaste"\cf4 \strokec4 ]\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\sl540\partightenfactor0
\cf5 \cb3 \strokec5 updateInventory\cf4 \strokec4 (\cf5 \strokec5 curInv\cf4 \strokec4 , \cf5 \strokec5 newInv\cf4 \strokec4 );\cb1 \
}