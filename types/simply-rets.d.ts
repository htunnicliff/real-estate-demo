declare namespace SimplyRETS {
    namespace Parameters {
        export type Agent = string[];
        export type AgentQ = string;
        export type Brokers = string[];
        export type Cities = string[];
        export type Count = boolean;
        export type Counties = string[];
        export type ExteriorFeatures = string[];
        export type Features = string[];
        export type Idx = ("null" | "listing" | "address" | "ignore")[];
        export type Include = ("association" | "agreement" | "garageSpaces" | "maintenanceExpense" | "parking" | "pool" | "rooms" | "taxYear" | "taxAnnualAmount")[];
        export type LastId = number;
        export type Limit = number;
        export type MaxGarageSpaces = number;
        export type Maxacres = number;
        export type Maxarea = number;
        export type Maxbaths = number;
        export type Maxbeds = number;
        export type Maxdom = number;
        export type Maxlistdate = string;
        export type Maxprice = number;
        export type Maxyear = number;
        export type MinGarageSpaces = number;
        export type Minacres = number;
        export type Minarea = number;
        export type Minbaths = number;
        export type Minbeds = number;
        export type Minlistdate = string;
        export type Minprice = number;
        export type Minyear = number;
        export type Neighborhoods = string[];
        export type Offset = number;
        export type Ownership = string[];
        export type Points = string[];
        export type PostalCodes = string[];
        export type Q = string[];
        export type SalesAgent = string[];
        export type Sort = "listprice" | "-listprice" | "listdate" | "-listdate" | "closedate" | "-closedate" | "beds" | "-beds" | "baths" | "-baths";
        export type SpecialListingConditions = string[];
        export type Status = ("Active" | "Pending" | "Closed" | "ActiveUnderContract" | "Hold" | "Withdrawn" | "Expired" | "Delete" | "Incomplete" | "ComingSoon")[];
        export type SubTypeText = string[];
        export type Subtype = ("apartment" | "boatslip" | "singlefamilyresidence" | "deededparking" | "cabin" | "condominium" | "duplex" | "manufacturedhome" | "ownyourown" | "quadruplex" | "stockcooperative" | "townhouse" | "timeshare" | "triplex" | "manufacturedonland" | "farmandranch" | "agriculture" | "business" | "hotelmotel" | "industrial" | "mixeduse" | "officespace" | "retail" | "unimprovedland" | "warehouse")[];
        export type Type = ("residential" | "rental" | "mobilehome" | "condominium" | "multifamily" | "commercial" | "land" | "farm")[];
        export type Vendor = string;
        export type Water = string[];
    }
    export interface QueryParameters {
        q?: Parameters.Q;
        status?: Parameters.Status;
        type?: Parameters.Type;
        subtype?: Parameters.Subtype;
        subTypeText?: Parameters.SubTypeText;
        agent?: Parameters.Agent;
        salesAgent?: Parameters.SalesAgent;
        brokers?: Parameters.Brokers;
        specialListingConditions?: Parameters.SpecialListingConditions;
        ownership?: Parameters.Ownership;
        minprice?: Parameters.Minprice;
        maxprice?: Parameters.Maxprice;
        minarea?: Parameters.Minarea;
        maxarea?: Parameters.Maxarea;
        minbaths?: Parameters.Minbaths;
        maxbaths?: Parameters.Maxbaths;
        minbeds?: Parameters.Minbeds;
        maxbeds?: Parameters.Maxbeds;
        maxdom?: Parameters.Maxdom;
        minyear?: Parameters.Minyear;
        maxyear?: Parameters.Maxyear;
        minacres?: Parameters.Minacres;
        maxacres?: Parameters.Maxacres;
        minGarageSpaces?: Parameters.MinGarageSpaces;
        maxGarageSpaces?: Parameters.MaxGarageSpaces;
        minlistdate?: Parameters.Minlistdate;
        maxlistdate?: Parameters.Maxlistdate;
        limit?: Parameters.Limit;
        offset?: Parameters.Offset;
        lastId?: Parameters.LastId;
        vendor?: Parameters.Vendor;
        postalCodes?: Parameters.PostalCodes;
        features?: Parameters.Features;
        exteriorFeatures?: Parameters.ExteriorFeatures;
        water?: Parameters.Water;
        neighborhoods?: Parameters.Neighborhoods;
        cities?: Parameters.Cities;
        counties?: Parameters.Counties;
        points?: Parameters.Points;
        idx?: Parameters.Idx;
        include?: Parameters.Include;
        sort?: Parameters.Sort;
        count?: Parameters.Count;
        agentQ?: Parameters.AgentQ;
    }
    namespace Schemas {
        /**
         * SimplyRETS Agent Api
         */
        export interface Agent {
            /**
             * Agent last name
             */
            lastName?: string | null;
            /**
             * Agent contact info. This information is only present when
             * your RETS feed specifies the agent wishes to show their
             * contact information publicly.
             *
             * *Contact information is not available for all RETS Vendors.*
             *
             */
            contact?: /* RETS Contact Information */ ContactInformation;
            /**
             * Agent first name
             */
            firstName?: string | null;
            /**
             * Well known Agent MLS number or id.
             */
            id?: string | null;
        }
        /**
         * The SimplyRETS agents API response
         */
        export interface AgentsResponse {
            /**
             * The MLS id of the agent.
             * example:
             * 123456789
             */
            id?: string | null;
            /**
             * The first name of the agent.
             * example:
             * John
             */
            firstName?: string | null;
            /**
             * The last name of the agent.
             * example:
             * Doe
             */
            lastName?: string | null;
            /**
             * Agent address information
             */
            address?: /* RETS Street Address */ StreetAddress;
            /**
             * Agent contact information
             */
            contact?: /* RETS Contact Information */ ContactInformation;
            /**
             * The local, well-known MLS ID of the agent's office.
             * example:
             * MLS123
             */
            officeMlsId?: string | null;
        }
        /**
         * Home Owners Association
         */
        export interface Association {
            /**
             * Association fee
             */
            fee?: null | number;
            /**
             * The frequency the association fee is paid. For example:
             * Monthly, Annually, One Time, etc.
             *
             */
            frequency?: string | null;
            /**
             * Name of the association
             */
            name?: string | null;
            /**
             * Any extra amenities granted by the HOA
             */
            amenities?: string | null;
        }
        /**
         * SimplyRETS Broker Api
         */
        export interface Broker {
            /**
             * Start Date
             */
            startdate?: string | null; // date-time
        }
        /**
         * RETS Contact Information
         */
        export type ContactInformation = {
            /**
             * The email address of the `ContactInformation`
             *
             * **Not available for all RETS vendors**
             *
             */
            email?: string | null;
            /**
             * Contact Information Office Phone Number
             *
             * **Not available for all RETS vendors**
             *
             */
            office?: string | null;
            /**
             * Contact Information Cell Phone
             *
             * **Not available for all RETS vendors**
             *
             */
            cell?: string | null;
        } | null;
        /**
         * Error information
         */
        export interface Error {
            /**
             * Error code. In general, we try to adhere to HTTP status code
             * and use these error statuses for detailed reporting.
             *
             */
            error?: number; // int32
            /**
             * Status message with an explanation of the error
             */
            message?: string;
        }
        /**
         * RETS Geographic Data
         */
        export interface GeographicData {
            /**
             * Listing county
             */
            county?: string | null;
            /**
             * Listing latitude (if available)
             */
            lat?: number | null; // double
            /**
             * Listing longitude (if available)
             */
            lng?: number | null; // double
            /**
             * Listing GeoMarket area. May be the same as mlsArea
             */
            marketArea?: string | null;
            /**
             * Directions to the property
             */
            directions?: string | null;
        }
        /**
         * RETS Listing Property
         */
        export interface Listing {
            /**
             * Agent only remarks
             */
            privateRemarks?: string | null;
            /**
             * Specific property data associated with listing.
             */
            property?: /* Rets Listing Property */ Property;
            /**
             * A unique identifier for this listing specific to the
             * SimplyRETS API. Thie identifier is specific to the
             * SimplyRETS api and has no correlation with the MLS
             * number. Use this id when making requests to the single
             * listing endpoint (eg, `/properties/{mlsId}`).
             *
             * Applications should not rely on specific `mlsId`s being
             * present. Instead, apps should dynamically use the `mlsId`
             * after using other more general query parameters. Many mls
             * vendors require listings which are expired, terminated or
             * sold to be purged, which will render calls to specific
             * `mlsId`s to return nothing (or possibly a 404).
             *
             */
            mlsId?: number; // int64
            /**
             * Public instructions for showing the property.
             */
            showingInstructions?: string | null;
            /**
             * The name of the contact for the showing of the listed property.
             */
            showingContactName?: string | null;
            /**
             * Telephone number that should be called to arrange showing the property.
             */
            showingContactPhone?: string | null;
            /**
             * A list of options that describe the type of sale. i.e. Standard,
             * REO, Short Sale, Probate, Auction, NOD, etc., at the time of listing.
             *
             * example:
             * Real Estate Owned
             */
            specialListingConditions?: string | null;
            /**
             * A text description of the manner in which title to a
             * property is held. Trust, Corporation, Joint Tennant,
             * Individual.
             *
             * example:
             * Individual
             */
            ownership?: string | null;
            /**
             * Listing office or brokerage.
             */
            office?: /* RETS Office */ Office;
            /**
             * Represents the length of the lease.
             */
            leaseTerm?: string | null;
            /**
             * Data accuracy disclaimer. The value in the disclaimer may
             * change depending on the rules imposed by your RETS vendors.
             *
             */
            disclaimer?: string | null;
            /**
             * Comprehensive property address information
             */
            address?: /* RETS Street Address */ StreetAddress;
            /**
             * Date and time the listing became Active
             */
            listDate?: string | null; // date-time
            /**
             * Comprehensive listing agent information
             */
            agent?: /* SimplyRETS Agent Api */ Agent;
            /**
             * Date and time of the last modification
             */
            modified?: string | null; // date-time
            /**
             * Comprehensive school zone data
             */
            school?: /* RETS School Data */ School;
            /**
             * Photos of the property. Images are served over https and are
             * suitable for production use on secure websites
             *
             */
            photos?: string[];
            /**
             * Price of the listing
             */
            listPrice?: number | null; // double
            /**
             * The original price of the property on the initial
             * agreement between the seller and the seller's broker.
             *
             */
            originalListPrice?: number | null; // double
            /**
             * The IDX address display requirements of the listing from the MLS.
             */
            internetAddressDisplay?: boolean | null;
            /**
             * Data Dictionary v1.3 ListingId. The well known identifier for
             * the listing. The value is the id or number by the RETS vendor
             * as a public identifier for the listing.
             *
             * This identifier should not be confused with the `mlsId`, which is
             * specific to the SimplyRETS API.
             *
             */
            listingId?: string;
            /**
             * RETS vendor information and data
             */
            mls?: /* RETS Vendor Data */ MlsInformation;
            /**
             * The IDX entire listing display requirements of the listing from the MLS.
             */
            internetEntireListingDisplay?: boolean | null;
            /**
             * Geographic data for the listing
             */
            geo?: /* RETS Geographic Data */ GeographicData;
            /**
             * Associate tax data
             */
            tax?: /* RETS Tax Data */ Tax;
            /**
             * co-listing agent information.
             *
             * *NOTE*: If your RETS feed stores co-list information outside
             * of the `Property` resource, co-list agent information will not
             * be available.
             *
             */
            coAgent?: /* SimplyRETS Agent Api */ Agent;
            /**
             * Sales data
             */
            sales?: /* Sales Data */ Sales;
            /**
             * Information about the status of the existing lease on the property.
             */
            leaseType?: string | null;
            /**
             * The URL for an unbranded virtual tour of the property.
             *
             * **Added on 2016/05/04 - Not available for all RETS vendors**
             *
             */
            virtualTourUrl?: string | null;
            /**
             * Description or remarks
             */
            remarks?: string | null;
            association?: /* Home Owners Association */ Association;
        }
        /**
         * The SimplyRETS single listing analytics API response
         */
        export interface ListingAnalytics {
            /**
             * The listing's price per square foot, based on the current `ListPrice` and `LivingArea`.
             * example:
             * 8.25
             */
            pricePerSqFt?: number | null; // float
        }
        /**
         * The SimplyRETS market analytics API response
         */
        export interface ListingsAnalytics {
            /**
             * The average `LivingArea` of listings matching the search criteria.
             * example:
             * 2550
             */
            avgLivingArea?: number | null; // float
            /**
             * The average `BathroomsFull` of listings matching the search criteria.
             * example:
             * 2.5
             */
            avgFullBaths?: number | null; // float
            /**
             * The average `BedroomsTotal` of listings matching the search criteria.
             * example:
             * 3
             */
            avgBedrooms?: number | null; // float
            /**
             * The average `LotSizeArea` of listings matching the search criteria.
             * example:
             * 9750.25
             */
            avgLotSize?: number | null; // float
            /**
             * The average `ListPrice` of listings matching the search criteria.
             * example:
             * 325275
             */
            avgPrice?: number | null; // float
            /**
             * The average `YearBuilt` of listings matching the search criteria.
             * example:
             * 1990
             */
            avgYearBuilt?: number | null; // float
            /**
             * The total number of listings in an MLS area matching the search criteria.
             * example:
             * {
             *   "Other": 0,
             *   "Towne Lake": 5,
             *   "Rice Military": 3,
             *   "Vineyard Mdw Sec 01": 3,
             *   "Glen Arbor Sec 07": 4
             * }
             */
            areaDistribution?: {
                [key: string]: any;
            } | null;
            /**
             * The total number of listings matching the search criteria, and used to calculate the analytics.
             * example:
             * 15
             */
            totalCount?: null | number;
        }
        /**
         * RETS Vendor Data
         */
        export interface MlsInformation {
            /**
             * Normalized [RESO Data Dictionary 1.7]() standard status value.  Compliant with Data Dictionary v1.7 `ListingStatus`.
             * Listing statuses depend on your RETS vendor's field availability. Below is a brief description of each status with possible synonyms which may map to your RETS vendor-specific statuses.
             * - **Active**: Active Listing which is still on the market
             * - **ActiveUnderContract**: An offer has been accepted but the listing is still on market. Synonyms: Accepting Backup Offers, Backup Offer, Active With Accepted. Synonyms: Offer, Backup, Contingent
             * - **Pending**: An offer has been accepted and the listing is no longer on market. Synonyms: Offer Accepted, Under Contract
             * - **ComingSoon**: This is a listing that has not yet been on market but will be on market soon.
             * - **Closed**: The purchase agreement has been fulfilled or the lease agreement has been executed. Synonyms: Sold, Leased, Rented, Closed Sale
             *
             */
            status?: "Active" | "ActiveUnderContract (Backup-Offer)" | "Pending" | "Hold" | "Withdrawn" | "Closed" | "Expired" | "Delete" | "Incomplete" | "ComingSoon";
            /**
             * MLS Area major. The major marketing area name, as defined by the MLS or other non-governmental organization.
             */
            area?: string | null;
            /**
             * Amount of days the property has been Active
             */
            daysOnMarket?: null | number; // int64
            /**
             * The transactional timestamp automatically recorded by the MLS system
             * representing the date/time the listing was entered and made visible
             * to members of the MLS.
             *
             */
            originalEntryTimestamp?: string | null; // date-time
            /**
             * Alias for the listing office or brokerage
             *
             * This field corresponds to the data-dictionary `OriginatingSystemName` field
             *
             * The name of the originating record provider.  Most commonly
             * the name of the MLS. The place where the listing is
             * originally input by the member.  The legal name of the
             * company.  To be used for display.
             *
             * If you're data provider aggregates feeds from multiple other
             * RETS vendors, this will be the name of the originating RETS
             * vendor.
             *
             */
            originatingSystemName?: string | null;
            /**
             * Raw MLS status text. This `field` comes directly from your RETS data
             * field and is not normalized.
             *
             */
            statusText?: string;
            /**
             * MLS Area minor. The minor/sub marketing area name, as defined by the MLS or other non-governmental organization.
             */
            areaMinor?: string | null;
        }
        /**
         * RETS Office
         */
        export interface Office {
            /**
             * Associated contact details for the office. The availability of this
             * information depends on your RETS vendor's rules and regulations
             *
             * *Contact information is not available for all RETS Vendors.*
             *
             */
            contact?: /* RETS Contact Information */ ContactInformation;
            /**
             * Pimary office name
             */
            name?: string | null;
            /**
             * Primary office or brokerage name
             */
            servingName?: string | null;
            /**
             * Office or brokerage MLS identifier
             *
             * **Not available for all RETS vendors**
             *
             */
            brokerid?: string | null;
        }
        /**
         * SimplyRETS Open House object
         */
        export interface OpenHouse {
            /**
             * Provided
             */
            refreshments?: string | null;
            /**
             * The full listing associated with the OpenHouse
             */
            listing?: /* RETS Listing Property */ Listing;
            /**
             * Start Date for the open house
             */
            startTime?: string | null; // date-time
            /**
             * The MLS number for the showing agent or agent which created the
             * OpenHouse in the RETS database.
             *
             */
            inputId?: null;
            /**
             * A unique identifier for the open house which is specific to the
             * SimplyRETS API
             *
             */
            openHouseKey?: number;
            /**
             * The ending date time for the open house
             */
            endTime?: string | null; // date-time
            /**
             * The MLS number or id provided by the RETS vendor or MLS.
             *
             */
            openHouseId?: string;
            /**
             * The open house type. For example, Public or Private
             */
            type?: string | null;
            /**
             * The remarks and/or description details for the open house
             */
            description?: string | null;
        }
        /**
         * Response of a successful OPTIONS request to /
         */
        export interface OptionsResponse {
            /**
             * Timestamp of when the information in this response
             * should be considered stale.
             *
             * example:
             * 2020-01-02T11:06:18.916879378Z
             */
            expires?: string; // date-time
            /**
             * A list of vendor IDs available to these API credentials,
             * to be used in requests to `/properties`, `/openhouses`,
             * etc.
             *
             * example:
             * [
             *   "abcmls",
             *   "xyzmls"
             * ]
             */
            vendors?: string[];
            /**
             * A key/value map of vendor IDs with the timestamp of the
             * last succesful sync.
             *
             * example:
             * {
             *   "abcmls": "2020-08-01T01:06:18.235819332Z",
             *   "xyzmls": "2020-08-01T11:06:18.916879378Z"
             * }
             */
            updates?: {
                [name: string]: string;
            };
            /**
             * A list of API endpoints accesible with these credentials.
             *
             * example:
             * [
             *   "/properties",
             *   "/openhouses"
             * ]
             */
            endpoints?: string[];
            /**
             * A list of valid media types available to these API credentials.
             *   See [versioning API requests with media types](/topics/versioning-api-requests-with-media-types).
             *
             * example:
             * [
             *   "application/json",
             *   "application/vnd.simplyrets-v0.1+json"
             * ]
             */
            accepts?: string[];
        }
        /**
         * RETS School Data
         */
        export interface Parking {
            leased?: string | null;
            /**
             * Number of parking spaces
             */
            spaces?: null | number;
            /**
             * Parking features description
             */
            description?: string | null;
        }
        /**
         * Response of a successful OPTIONS request to /properties
         */
        export interface PropertiesOptionsResponse {
            /**
             * Timestamp when the information in this response should
             * be considered stale.
             *
             * example:
             * 2020-01-02T11:06:18.916879378Z
             */
            expires?: string; // date-time
            /**
             * Timestamp when this feed was last synced with the data
             * source successfully.
             *
             * example:
             * 2020-01-01T11:06:18.916879378Z
             */
            lastUpdate?: string; // date-time
            /**
             * An object containing field names, and all known values
             * for that field in this feed.
             *
             */
            fields?: {
                /**
                 * A list of `statuses` available for this feed.
                 * example:
                 * [
                 *   "Active",
                 *   "Pending",
                 *   "Closed"
                 * ]
                 */
                status?: string[] | null;
                /**
                 * A list of `cities` found in this feed.
                 * example:
                 * [
                 *   "Houston",
                 *   "Austin",
                 *   "Dallas"
                 * ]
                 */
                cities?: string[] | null;
                /**
                 * A list of `counties` found in this feed.
                 * example:
                 * [
                 *   "Houston",
                 *   "Austin",
                 *   "Dallas"
                 * ]
                 */
                counties?: string[] | null;
                /**
                 * A list of `interiorFeatures` found in this feed.
                 * example:
                 * [
                 *   "Central Air",
                 *   "Great views",
                 *   "Patio"
                 * ]
                 */
                features?: string[] | null;
                /**
                 * A list of `neighborhoods` found in this feed.
                 * example:
                 * [
                 *   "Downtown",
                 *   "Midtown",
                 *   "Uptown"
                 * ]
                 */
                neighborhoods?: string[] | null;
                /**
                 * A list of `areaMinor`s found in this feed.
                 * example:
                 * [
                 *   "01-Rice Village",
                 *   "02-Independence Heights",
                 *   "03-Garden Oaks"
                 * ]
                 */
                areaMinor?: string[] | null;
                /**
                 * A list of property `type`s found in this feed.
                 * example:
                 * [
                 *   "Residential",
                 *   "Rental",
                 *   "Condominium",
                 *   "Townhome",
                 *   "Land"
                 * ]
                 */
                type?: string[] | null;
            } | null;
        }
        /**
         * Rets Listing Property
         */
        export interface Property {
            /**
             * Property roof description
             */
            roof?: string | null;
            /**
             * A description of the cooling or air conditioning features of the property.
             */
            cooling?: string | null;
            /**
             * Property style description or short string
             */
            style?: string | null;
            /**
             * Square footage of the building associated with a listing
             */
            area?: null | number; // int64
            /**
             * Number of full bathrooms
             */
            bathsFull?: null | number; // int64
            /**
             * Number of half bathrooms
             */
            bathsHalf?: null | number; // int64
            /**
             * Number of stories or levels. Represented as a `double' to
             * account for half stories.
             *
             */
            stories?: number | null; // float
            /**
             * Number of fireplaces
             */
            fireplaces?: null | number; // int64
            /**
             * The type(s) of flooring found within the property.
             */
            flooring?: string | null;
            /**
             * Heating description or short string
             */
            heating?: string | null;
            foundation?: string | null;
            poolFeatures?: string | null;
            laundryFeatures?: string | null;
            occupantName?: string | null;
            ownerName?: string | null;
            lotDescription?: string | null;
            /**
             * Lot size in acres
             *
             * **Added on 2016/05/04 - Not available for all RETS vendors**
             *
             */
            lotSizeAcres?: number | null; // float
            /**
             * A normalized representation of the listings sub-type.
             *
             */
            subType?: "Apartment" | "BoatSlip" | "SingleFamilyResidence" | "DeededParking" | "Cabin" | "Condominium" | "Duplex" | "ManufacturedHome" | "Quadruplex" | "StockCooperative" | "Townhouse" | "Timeshare" | "Triplex" | "ManufacturedOnLand" | null;
            /**
             * Number of bedrooms
             */
            bedrooms?: null | number; // int64
            /**
             * The properties interior features
             */
            interiorFeatures?: string | null;
            /**
             * Lot size dimensions or square footage as a text. This
             * field is generally used to show the pretty formatted
             * lot size.
             *
             */
            lotSize?: string | null;
            areaSource?: string | null;
            /**
             * Yearly maintenance expense
             */
            maintenanceExpense?: number | null; // float
            /**
             * Additional room information. This is a textual description
             * of additional rooms for the listing.
             *
             */
            additionalRooms?: string | null;
            /**
             * Exterior Features for the listing
             *
             */
            exteriorFeatures?: string | null;
            /**
             * The name, if known, of the body of water on which the
             * property is located. (E.g., lake name, river name, ocean
             * name, sea name, canal name). Otherwise, this field will
             * contain features of the waterfront on which the property is
             * located.
             *
             */
            water?: string | null;
            /**
             * View details and description
             */
            view?: string | null;
            /**
             * The total area of the lot.  See `lotSizeUnits` for the units
             * of measurement (Square Feet, Square Meters, Acres, etc.).
             *
             * **Added on 2016/05/04 - Not available for all RETS vendors**
             *
             */
            lotSizeArea?: number | null; // float
            /**
             * The subdivision or community name
             */
            subdivision?: string | null;
            /**
             * The materials that were used in the construction of the property.
             */
            construction?: string | null;
            /**
             * The raw text representation of the property sub type.
             *
             */
            subTypeRaw?: string | null;
            parking?: /* RETS School Data */ Parking;
            /**
             * Unit of measurement for the lotSizeArea field.  e.g. Square
             * Feet, Square Meters, Acres, etc.
             *
             * If this field is `null` the units is the default unit
             * of measure specified by your RETS provider.
             *
             * **Added on 2016/05/04 - Not available for all RETS vendors**
             *
             */
            lotSizeAreaUnits?: string | null;
            /**
             * Abbreviated property type. RES is Residential, CND is CondoOrTownhome,
             * RNT is Rental, MLF is Multi-Family, CRE is Commercial, LND is Land,
             * FRM is Farm. See the `propertySubType` field for more information.
             *
             */
            type?: "RES" | "CND" | "RNT" | "MLF" | "CRE" | "LND" | "FRM";
            /**
             * Number of garage spaces
             */
            garageSpaces?: number | null; // float
            /**
             * Number of 3/4 bathrooms
             */
            bathsThreeQuarter?: null | number; // int64
            accessibility?: string | null;
            occupantType?: string | null;
            /**
             * Year the property was built
             */
            yearBuilt?: null | number; // int64
            /**
             * A comprehensive list of rooms. Room data is not included in the
             * standard payload.  Use `include=rooms` in your query to include
             * room data. If the list of rooms is empty, your RETS vendor may
             * not supply this information with your RETS feed.
             *
             * This data is populated from 2 sources:
             *
             *   1. Inline room mappings in the `Property` resource
             *
             *   2. In an external RETS resource (e.g. `Room`)
             *
             */
            rooms?: /* Sales Data */ Room[] | null;
        }
        /**
         * Sales Data
         */
        export interface Room {
            length?: number | null; // float
            /**
             * A set of features in the room.
             */
            features?: string | null;
            /**
             * The area of the room in units provided by the RETS vendor.
             */
            area?: number | null; // float
            width?: number | null; // float
            /**
             * Entire raw value of of the room `Type` data provided in the
             * RETS feed.
             *
             */
            typeText?: string | null;
            /**
             * The `RoomType` RESO Data Dictionary 1.6 type.
             */
            type?: string | null;
            /**
             * Room dimension textual value.
             */
            dimensions?: string | null;
            /**
             * A description of the room.
             */
            description?: string | null;
        }
        /**
         * Sales Data
         */
        export interface Sales {
            /**
             * RETS Sales data close date
             */
            closeDate?: string | null; // date-time
            /**
             * RETS Sales data selling office/brokerage id
             */
            office?: /* RETS Office */ Office;
            /**
             * RETS Sales data sold price
             */
            closePrice?: null | number; // int64
            /**
             * RETS Sales data agent id
             */
            agent?: /* SimplyRETS Agent Api */ Agent;
            /**
             * RETS Sales data contract date
             */
            contractDate?: string | null; // date-time
        }
        /**
         * RETS School Data
         */
        export interface School {
            /**
             * Middle or junior school name
             */
            middleSchool?: string | null;
            /**
             * High school name
             */
            highSchool?: string | null;
            /**
             * Elementary school name.
             */
            elementarySchool?: string | null;
            /**
             * School district name.
             */
            district?: string | null;
        }
        /**
         * RETS Street Address
         */
        export interface StreetAddress {
            /**
             * Known cross street
             */
            crossStreet?: string | null;
            /**
             * State or province. Maps to the data dictionary field `StateOrProvince`.
             */
            state?: string | null;
            /**
             * Street address country (United States or Canada)
             */
            country?: string | null;
            /**
             * Street Address postal code
             */
            postalCode?: string | null;
            /**
             * Name of the street
             */
            streetName?: string | null;
            /**
             * Textual representation of the street number. This field
             * is usually redundant with what's in `streetNumber` but is
             * occassionally usefuly for street number which are actually
             * alpha-numerical. For example, "N63453" or "34556B".
             *
             * **Added on 2016/05/02**
             *
             */
            streetNumberText?: string | null;
            /**
             * City name
             */
            city?: string | null;
            /**
             * Street number
             */
            streetNumber?: null | number; // int64
            /**
             * Full pretty-printed address with suffix (if available)
             */
            full?: string | null;
            /**
             * Unit number
             */
            unit?: string | null;
        }
        /**
         * RETS Tax Data
         */
        export interface Tax {
            /**
             * Tax Year
             */
            taxYear?: null | number; // int64
            /**
             * Annual tax amount in USD
             */
            taxAnnualAmount?: null | number;
            /**
             * Tax Parcel ID for the listing
             */
            id?: string | null;
        }
    }
}
declare namespace SimplyRETSPaths {
    namespace Agents {
        namespace Get {
            namespace Parameters {
                export type $0 = SimplyRETS.Parameters.AgentQ;
                export type Name = string;
                export type State = string;
            }
            export interface QueryParameters {
                name?: Parameters.Name;
                state?: Parameters.State;
            }
            namespace Responses {
                export type $200 = /* The SimplyRETS agents API response */ SimplyRETS.Schemas.AgentsResponse[];
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace Openhouses {
        namespace Get {
            namespace Parameters {
                export type Agent = string;
                export type Brokers = string[];
                export type Cities = string[];
                export type Include = string[];
                export type LastId = number;
                export type Limit = number;
                export type ListingId = string;
                export type Minprice = number;
                export type Offset = number;
                export type Sort = "listprice" | "-listprice" | "listdate" | "-listdate" | "beds" | "-beds" | "baths" | "-baths";
                export type Startdate = string; // date-time
                export type Type = "residential" | "rental" | "mobilehome" | "condominium" | "multifamily" | "commercial" | "land" | "farm";
                export type Vendor = string;
            }
            export interface QueryParameters {
                type?: Parameters.Type;
                listingId?: Parameters.ListingId;
                cities?: Parameters.Cities;
                vendor?: Parameters.Vendor;
                brokers?: Parameters.Brokers;
                agent?: Parameters.Agent;
                minprice?: Parameters.Minprice;
                startdate?: Parameters.Startdate /* date-time */;
                offset?: Parameters.Offset;
                lastId?: Parameters.LastId;
                limit?: Parameters.Limit;
                sort?: Parameters.Sort;
                include?: Parameters.Include;
            }
            namespace Responses {
                export type $200 = /* SimplyRETS Open House object */ SimplyRETS.Schemas.OpenHouse[];
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace Openhouses$OpenHouseKey {
        namespace Get {
            namespace Parameters {
                export type Include = string[];
                export type OpenHouseKey = number; // int64
                export type Vendor = string;
            }
            export interface PathParameters {
                openHouseKey: Parameters.OpenHouseKey /* int64 */;
            }
            export interface QueryParameters {
                vendor?: Parameters.Vendor;
                include?: Parameters.Include;
            }
            namespace Responses {
                export type $200 = /* SimplyRETS Open House object */ SimplyRETS.Schemas.OpenHouse;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace Properties {
        namespace Get {
            namespace Parameters {
                export type $0 = SimplyRETS.Parameters.Q;
                export type $1 = SimplyRETS.Parameters.Status;
                export type $10 = SimplyRETS.Parameters.Minprice;
                export type $11 = SimplyRETS.Parameters.Maxprice;
                export type $12 = SimplyRETS.Parameters.Minarea;
                export type $13 = SimplyRETS.Parameters.Maxarea;
                export type $14 = SimplyRETS.Parameters.Minbaths;
                export type $15 = SimplyRETS.Parameters.Maxbaths;
                export type $16 = SimplyRETS.Parameters.Minbeds;
                export type $17 = SimplyRETS.Parameters.Maxbeds;
                export type $18 = SimplyRETS.Parameters.Maxdom;
                export type $19 = SimplyRETS.Parameters.Minlistdate;
                export type $2 = SimplyRETS.Parameters.Type;
                export type $20 = SimplyRETS.Parameters.Maxlistdate;
                export type $21 = SimplyRETS.Parameters.Minyear;
                export type $22 = SimplyRETS.Parameters.Maxyear;
                export type $23 = SimplyRETS.Parameters.Minacres;
                export type $24 = SimplyRETS.Parameters.Maxacres;
                export type $25 = SimplyRETS.Parameters.MinGarageSpaces;
                export type $26 = SimplyRETS.Parameters.MaxGarageSpaces;
                export type $27 = SimplyRETS.Parameters.Limit;
                export type $28 = SimplyRETS.Parameters.Offset;
                export type $29 = SimplyRETS.Parameters.LastId;
                export type $3 = SimplyRETS.Parameters.Subtype;
                export type $30 = SimplyRETS.Parameters.Vendor;
                export type $31 = SimplyRETS.Parameters.PostalCodes;
                export type $32 = SimplyRETS.Parameters.Features;
                export type $33 = SimplyRETS.Parameters.ExteriorFeatures;
                export type $34 = SimplyRETS.Parameters.Water;
                export type $35 = SimplyRETS.Parameters.Neighborhoods;
                export type $36 = SimplyRETS.Parameters.Cities;
                export type $37 = SimplyRETS.Parameters.Counties;
                export type $38 = SimplyRETS.Parameters.Points;
                export type $39 = SimplyRETS.Parameters.Idx;
                export type $4 = SimplyRETS.Parameters.SubTypeText;
                export type $40 = SimplyRETS.Parameters.Include;
                export type $41 = SimplyRETS.Parameters.Sort;
                export type $42 = SimplyRETS.Parameters.Count;
                export type $5 = SimplyRETS.Parameters.Agent;
                export type $6 = SimplyRETS.Parameters.SalesAgent;
                export type $7 = SimplyRETS.Parameters.Brokers;
                export type $8 = SimplyRETS.Parameters.SpecialListingConditions;
                export type $9 = SimplyRETS.Parameters.Ownership;
            }
            namespace Responses {
                export type $200 = /* RETS Listing Property */ SimplyRETS.Schemas.Listing[];
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
        namespace Options {
            namespace Parameters {
                export type $0 = SimplyRETS.Parameters.Vendor;
            }
            namespace Responses {
                export type $200 = /* Response of a successful OPTIONS request to /properties */ SimplyRETS.Schemas.PropertiesOptionsResponse;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace Properties$MlsId {
        namespace Get {
            namespace Parameters {
                export type Include = string[];
                export type MlsId = number; // int64
                export type Vendor = string;
            }
            export interface PathParameters {
                mlsId: Parameters.MlsId /* int64 */;
            }
            export interface QueryParameters {
                vendor?: Parameters.Vendor;
                include?: Parameters.Include;
            }
            namespace Responses {
                export type $200 = /* RETS Listing Property */ SimplyRETS.Schemas.Listing;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace Properties$MlsIdAnalytics {
        namespace Get {
            namespace Parameters {
                export type $1 = SimplyRETS.Parameters.Vendor;
                export type MlsId = number; // int64
            }
            export interface PathParameters {
                mlsId: Parameters.MlsId /* int64 */;
            }
            namespace Responses {
                export type $200 = /* The SimplyRETS single listing analytics API response */ SimplyRETS.Schemas.ListingAnalytics;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace PropertiesAnalytics {
        namespace Get {
            namespace Parameters {
                export type $0 = SimplyRETS.Parameters.Q;
                export type $1 = SimplyRETS.Parameters.Status;
                export type $10 = SimplyRETS.Parameters.Maxarea;
                export type $11 = SimplyRETS.Parameters.Minbaths;
                export type $12 = SimplyRETS.Parameters.Maxbaths;
                export type $13 = SimplyRETS.Parameters.Minbeds;
                export type $14 = SimplyRETS.Parameters.Maxbeds;
                export type $15 = SimplyRETS.Parameters.Maxdom;
                export type $16 = SimplyRETS.Parameters.Minyear;
                export type $17 = SimplyRETS.Parameters.Maxyear;
                export type $18 = SimplyRETS.Parameters.Minacres;
                export type $19 = SimplyRETS.Parameters.Maxacres;
                export type $2 = SimplyRETS.Parameters.Type;
                export type $20 = SimplyRETS.Parameters.MinGarageSpaces;
                export type $21 = SimplyRETS.Parameters.MaxGarageSpaces;
                export type $22 = SimplyRETS.Parameters.Limit;
                export type $23 = SimplyRETS.Parameters.Offset;
                export type $24 = SimplyRETS.Parameters.LastId;
                export type $25 = SimplyRETS.Parameters.Vendor;
                export type $26 = SimplyRETS.Parameters.PostalCodes;
                export type $27 = SimplyRETS.Parameters.Features;
                export type $28 = SimplyRETS.Parameters.ExteriorFeatures;
                export type $29 = SimplyRETS.Parameters.Water;
                export type $3 = SimplyRETS.Parameters.Subtype;
                export type $30 = SimplyRETS.Parameters.Neighborhoods;
                export type $31 = SimplyRETS.Parameters.Cities;
                export type $32 = SimplyRETS.Parameters.Counties;
                export type $33 = SimplyRETS.Parameters.Points;
                export type $34 = SimplyRETS.Parameters.Idx;
                export type $35 = SimplyRETS.Parameters.Include;
                export type $36 = SimplyRETS.Parameters.Sort;
                export type $37 = SimplyRETS.Parameters.Count;
                export type $4 = SimplyRETS.Parameters.Agent;
                export type $5 = SimplyRETS.Parameters.SalesAgent;
                export type $6 = SimplyRETS.Parameters.Brokers;
                export type $7 = SimplyRETS.Parameters.Minprice;
                export type $8 = SimplyRETS.Parameters.Maxprice;
                export type $9 = SimplyRETS.Parameters.Minarea;
            }
            namespace Responses {
                export type $200 = /* The SimplyRETS market analytics API response */ SimplyRETS.Schemas.ListingsAnalytics;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $401 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $403 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
    namespace _ {
        namespace Options {
            namespace Responses {
                export type $200 = /* Response of a successful OPTIONS request to / */ SimplyRETS.Schemas.OptionsResponse;
                export type $400 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $429 = /* Error information */ SimplyRETS.Schemas.Error;
                export type $500 = /* Error information */ SimplyRETS.Schemas.Error;
            }
        }
    }
}
