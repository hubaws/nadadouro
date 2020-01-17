from django.conf import settings

class IndexSfdc():
    
    customer_key = None
    
    def __init__(self, key):
        print(key)
        self.customer_key = "axel"        
    
    def getInitAndRedirect(self):
        redirectUrl = '{}{}?response_type=code&client_id={}&redirect_uri={}'.format(settings.SFDC_DOMAIN,settings.SFDC_AUTH_URL,settings.SFDC_KEY,settings.SFDC_CALLBACK)
        return redirectUrl