# Why Shopify migration is harder than exporting a CSV

- Woocommerce to shopify migration have multiple steps which includes products , variants , customer data, past order history and many more things . While CSV imports can handle mutliple things like products , variants but it lacks in import of past order history , for this we
  have to use Shopify GraphQL API which can handle complex import which include past order history and customer data

# How to transfer metafeilds from woocommerce to shopify ?

- In woocommerce metadata is stored in the feilds like wp_metadata in posts , whereas in the shopify metafeilds are stored in dedicated
  metafeilds and namespaces , simpler metafeilds can be imported through the CSV but wheraas complex structures like can be transferred using Shopify Rest API or Shopify GraphQL API

# How media is handled ?

- In Woocommerce the media is stored locally or on the cloud servers typically in the /wp-content/uploads and are connected to the products via the wordpress media library , but shopify handles the media differently , it stores the media in the dedicated storage buckets and CDNs which help fetching the media in sub milliseconds which eventually reduces the load time of the product page

- To transfer the media from a woocommerce to shopify store , shopify takes the https image url from the woocommerce , It is essential to for Woocommerce server to remain active during the migration process because if Woocommerce server gets down for even a small duration of time , then it will result in failed media uploads

# How Financial data and past order history is transferred

- Shopify Natively does not support any import option for past order history through CSV files , to effieciently transfer the order history and other financial data we can use shopify GraphQL APi or rest api , if you do not have any techinical assistance , we can directly transfer the data through Shopify marketplace apps which have access to these apis and can succesfully transfer the data from woocommerce to shopufy .

# What about customer data ?

- Shopify supports import of customer data through both CSV and Shopify GraphQL API , but it is not that easy to migrate customer data , as you cannot directly copy the user passwords from woocommerce to shopify , as woocommerce store the user passwords in a dedicated in a hash table securely , so there are mainly two way

1. For basic shopify plans , we can import the customer data , but the account will be set as inactive, and user has to reactive them via password or the OTP

2. For shopify plus plans , we can import the customer data without user needing to reset thier password
